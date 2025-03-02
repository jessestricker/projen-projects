import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Jesse Stricker',
  authorAddress: 'git@jessestricker.de',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.7.0',
  name: 'projen-projects',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/git/projen-projects.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();