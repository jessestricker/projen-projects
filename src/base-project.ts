import { Project, ProjectOptions, javascript, typescript } from "projen";

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
}

export class BaseProject extends Project {
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
