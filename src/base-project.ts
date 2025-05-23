import {
  Project,
  ProjectOptions,
  javascript,
  typescript,
  github,
  SampleReadme,
  Task,
} from "projen";

/**
 * Options for the base project.
 */
export interface BaseProjectOptions extends ProjectOptions {
  /**
   * The Node package manager used to install dependencies and run scripts.
   *
   * @default javascript.NodePackageManager.NPM
   */
  readonly packageManager?: javascript.NodePackageManager;

  /**
   * The NPM dependencies used for development.
   */
  readonly devDeps?: string[];

  /**
   * Enable the GitHub integration.
   *
   * Enabled by default for root projects. Disabled for non-root projects.
   *
   * @default true
   */
  readonly github?: boolean;

  /**
   * The options for the GitHub integration.
   *
   * @default - see GitHubOptions
   */
  readonly githubOptions?: github.GitHubOptions;
}

export class BaseProject extends Project {
  readonly github?: github.GitHub;
  readonly cleanTask: Task;

  private annotatedAsGenerated?: Set<string>;

  constructor(options: BaseProjectOptions) {
    if (options.projenrcJson || options.projenrcJsonOptions) {
      throw new Error(".projenrc.json not supported");
    }

    super(options);

    // tasks
    this.cleanTask = this.addTask("clean", {
      description: "Deletes the build output.",
    });

    // node package
    const packageManager =
      options.packageManager ?? javascript.NodePackageManager.NPM;

    const nodePackage = new javascript.NodePackage(this, {
      devDeps: options.devDeps,
      entrypoint: "",
      packageManager: packageManager,
      licensed: false,
    });
    nodePackage.addField("private", true);
    nodePackage.addField("name", undefined);
    nodePackage.addField("publishConfig", undefined);
    nodePackage.addField("version", undefined);

    nodePackage.addDevDeps("projen", "constructs@^10.0.0");

    // projenrc file
    const projenrc = new typescript.ProjenrcTs(this);
    nodePackage.addDevDeps("ts-node");
    this.defaultTask?.reset(
      `ts-node --project ${projenrc.tsconfig.fileName} ${projenrc.filePath}`,
    );

    // github
    if (options.github ?? !this.parent) {
      this.github = new github.GitHub(this, options.githubOptions);
      new SampleReadme(this);
    }
  }

  override annotateGenerated(glob: string): void {
    if (this.annotatedAsGenerated === undefined) {
      this.annotatedAsGenerated = new Set<string>();
    }
    this.annotatedAsGenerated.add(glob);
  }

  override preSynthesize(): void {
    if (this.github) {
      this.annotatedAsGenerated?.forEach((glob) =>
        this.gitattributes.addAttributes(glob, "linguist-generated"),
      );
    }
  }
}
