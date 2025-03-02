import { cdk, javascript } from "projen";
const project = new cdk.JsiiProject({
  name: "projen-projects",

  // github
  githubOptions: { mergify: false },

  // node
  defaultReleaseBranch: "main",
  packageManager: javascript.NodePackageManager.PNPM,
  prettier: true,
  pullRequestTemplate: false,

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
);
project.addTask("prettier", { exec: "prettier --write ." });

project.synth();
