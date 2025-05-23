import { Component } from "projen";
import { exec } from "projen/lib/util";
import { GradleProject } from "./gradle-project";

export interface GradleOptions {
  /**
   * The Gradle version to use.
   * @default "8.14"
   */
  readonly version?: string;
}

export class Gradle extends Component {
  readonly version: string;

  constructor(project: GradleProject, options: GradleOptions) {
    super(project);

    this.version = options.version ?? "8.14";

    // git
    project.gitignore.addPatterns("/.gradle/", "/build/");
    project.gitattributes.addAttributes("/gradlew", "text", "eol=lf");
    project.gitattributes.addAttributes("/gradlew.bat", "text", "eol=crlf");

    // tasks
    const compileTask = project.addTask("compile:gradle", {
      description: "Assembles main classes.",
      exec: "gw classes",
    });
    project.compileTask.spawn(compileTask);

    const packageTask = project.addTask("package:gradle", {
      description: "Assembles the outputs of this project.",
      exec: "gw assemble",
    });
    project.packageTask.spawn(packageTask);

    const testTask = project.addTask("test:gradle", {
      description: "Runs all checks.",
      exec: "gw check",
    });
    project.testTask.spawn(testTask);

    const cleanTask = project.addTask("clean:gradle", {
      description: "Deletes the Gradle build directory.",
      exec: "gw clean",
    });
    project.cleanTask.spawn(cleanTask);
  }

  override postSynthesize(): void {
    this.project.logger.info(`Adding the Gradle Wrapper...`);

    const generateGradleWrapper = (opts: { useWrapper: boolean }) => {
      const program = opts.useWrapper ? "gw" : "gradle";
      exec(`${program} wrapper --gradle-version ${this.version}`, {
        cwd: this.project.outdir,
      });
    };

    if (this.project.initProject) {
      generateGradleWrapper({ useWrapper: false });
    } else {
      generateGradleWrapper({ useWrapper: true });
    }

    // run a second time to re-generate scripts files
    generateGradleWrapper({ useWrapper: true });
  }
}
