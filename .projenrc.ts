import { cdk, javascript } from "projen";

const typescriptVersion = "~5.8";

const project = new cdk.JsiiProject({
  name: "projen-projects",

  // github
  githubOptions: { mergify: false },

  // node
  defaultReleaseBranch: "main",
  packageManager: javascript.NodePackageManager.NPM,
  peerDeps: ["constructs@^10.0.0", "projen@>=0.91.29 <1"],
  prettier: true,
  pullRequestTemplate: false,
  packageName: "@jessestricker/projen-projects",
  npmRegistryUrl: "https://npm.pkg.github.com",

  // typescript
  typescriptVersion: typescriptVersion,
  projenrcTs: true,

  // jsii
  jsiiVersion: typescriptVersion,
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
