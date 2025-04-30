import {
  Project,
  ProjectOptions,
  javascript,
  typescript,
  github,
  SampleReadme,
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

  private annotatedAsGenerated?: Set<string>;

  constructor(options: BaseProjectOptions) {
    if (options.projenrcJson || options.projenrcJsonOptions) {
      throw new Error(".projenrc.json not supported");
    }

    const packageManager =
      options.packageManager ?? javascript.NodePackageManager.NPM;
    const packageRunnerCommand = getPackageRunnerCommand(packageManager);

    super({
      ...options,
      projenCommand: `${packageRunnerCommand} projen`,
    });

    // node package
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
      `${packageRunnerCommand} ts-node --project ${projenrc.tsconfig.fileName} ${projenrc.filePath}`,
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

function getPackageRunnerCommand(
  packageManager: javascript.NodePackageManager,
) {
  switch (packageManager) {
    case javascript.NodePackageManager.YARN_BERRY:
      return "yarn dlx";
    case javascript.NodePackageManager.NPM:
      return "npx";
    case javascript.NodePackageManager.PNPM:
      return "pnpx";
    case javascript.NodePackageManager.BUN:
      return "bunx";
    default:
      throw new Error(`unsupported package manager "${packageManager}"`);
  }
}
