import * as path from "node:path";
import { Component, SampleFile } from "projen";
import { BaseProject, BaseProjectOptions } from "../base-project";
import { Gradle, GradleOptions } from "./gradle";

/**
 * The Gradle project options.
 */
export interface GradleProjectOptions extends BaseProjectOptions {
  /**
   * @default {}
   */
  readonly gradleOptions?: GradleOptions;

  /**
   * @default true
   */
  readonly sampleCode?: boolean;
}

/**
 * A Gradle project using the Kotlin DSL.
 */
export class GradleProject extends BaseProject {
  readonly gradle: Gradle;

  constructor(options: GradleProjectOptions) {
    super(options);

    this.gradle = new Gradle(this, options.gradleOptions ?? {});

    if (options.sampleCode ?? true) {
      new SampleCode(this);
    }
  }
}

class SampleCode extends Component {
  constructor(project: GradleProject) {
    super(project);

    new SampleFile(project, "settings.gradle.kts", {
      contents: [
        "plugins {",
        '    id("org.gradle.toolchains.foojay-resolver-convention") version "0.9.0"',
        "}",
        "",
        `rootProject.name = "${project.name}"`,
        "",
      ].join("\n"),
    });
    new SampleFile(project, "build.gradle.kts", {
      sourcePath: path.join(
        __dirname,
        "..",
        "..",
        "sample-assets",
        "gradle-project",
        "build.gradle.kts",
      ),
    });
    new SampleFile(project, "gradle/libs.versions.toml", {
      sourcePath: path.join(
        __dirname,
        "..",
        "..",
        "sample-assets",
        "gradle-project",
        "libs.versions.toml",
      ),
    });
    new SampleFile(project, "src/main/kotlin/Main.kt", {
      sourcePath: path.join(
        __dirname,
        "..",
        "..",
        "sample-assets",
        "gradle-project",
        "Main.kt",
      ),
    });
  }
}
