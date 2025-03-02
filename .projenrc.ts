import { cdk, javascript } from "projen";
const project = new cdk.JsiiProject({
  name: "projen-projects",

  // github
  githubOptions: { mergify: false },

  // node
  defaultReleaseBranch: "main",
  packageManager: javascript.NodePackageManager.PNPM,
  peerDeps: ["constructs", "projen"],
  prettier: true,
  pullRequestTemplate: false,
  packageName: "@jessestricker/projen-projects",
  npmRegistryUrl: "https://npm.pkg.github.com",

  // typescript
  projenrcTs: true,

  // jsii
  jsiiVersion: "~5.7.0",
  author: "Jesse Stricker",
  authorAddress: "git@jessestricker.de",
  repositoryUrl: "https://github.com/jessestricker/projen-projects.git",
});

project.prettier!.ignoreFile!.exclude(
  ...project.files.map((file) => file.path),
  project.package.lockFile,
  "API.md",
);
project.addTask("prettier", { exec: "prettier --write ." });

project.synth();
