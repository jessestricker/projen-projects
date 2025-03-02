import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  name: 'projen-projects',

  // node
  defaultReleaseBranch: 'main',
  packageManager: javascript.NodePackageManager.NPM,

  // typescript
  projenrcTs: true,

  // jsii
  jsiiVersion: '~5.7.0',
  author: 'Jesse Stricker',
  authorAddress: 'git@jessestricker.de',
  repositoryUrl: 'https://github.com/jessestricker/projen-projects.git',
});
project.synth();
