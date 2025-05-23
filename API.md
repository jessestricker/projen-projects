# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseProject <a name="BaseProject" id="@jessestricker/projen-projects.BaseProject"></a>

#### Initializers <a name="Initializers" id="@jessestricker/projen-projects.BaseProject.Initializer"></a>

```typescript
import { BaseProject } from '@jessestricker/projen-projects'

new BaseProject(options: BaseProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.BaseProject.Initializer.parameter.options">options</a></code> | <code><a href="#@jessestricker/projen-projects.BaseProjectOptions">BaseProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@jessestricker/projen-projects.BaseProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@jessestricker/projen-projects.BaseProjectOptions">BaseProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jessestricker/projen-projects.BaseProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@jessestricker/projen-projects.BaseProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `toString` <a name="toString" id="@jessestricker/projen-projects.BaseProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@jessestricker/projen-projects.BaseProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@jessestricker/projen-projects.BaseProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@jessestricker/projen-projects.BaseProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@jessestricker/projen-projects.BaseProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@jessestricker/projen-projects.BaseProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@jessestricker/projen-projects.BaseProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@jessestricker/projen-projects.BaseProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.BaseProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@jessestricker/projen-projects.BaseProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@jessestricker/projen-projects.BaseProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@jessestricker/projen-projects.BaseProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@jessestricker/projen-projects.BaseProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `glob`<sup>Required</sup> <a name="glob" id="@jessestricker/projen-projects.BaseProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

---

##### `postSynthesize` <a name="postSynthesize" id="@jessestricker/projen-projects.BaseProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@jessestricker/projen-projects.BaseProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@jessestricker/projen-projects.BaseProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.BaseProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@jessestricker/projen-projects.BaseProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@jessestricker/projen-projects.BaseProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@jessestricker/projen-projects.BaseProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@jessestricker/projen-projects.BaseProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.BaseProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@jessestricker/projen-projects.BaseProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.BaseProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@jessestricker/projen-projects.BaseProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.BaseProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@jessestricker/projen-projects.BaseProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.BaseProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jessestricker/projen-projects.BaseProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@jessestricker/projen-projects.BaseProject.isConstruct"></a>

```typescript
import { BaseProject } from '@jessestricker/projen-projects'

BaseProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@jessestricker/projen-projects.BaseProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@jessestricker/projen-projects.BaseProject.isProject"></a>

```typescript
import { BaseProject } from '@jessestricker/projen-projects'

BaseProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@jessestricker/projen-projects.BaseProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@jessestricker/projen-projects.BaseProject.of"></a>

```typescript
import { BaseProject } from '@jessestricker/projen-projects'

BaseProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@jessestricker/projen-projects.BaseProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.cleanTask">cleanTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@jessestricker/projen-projects.BaseProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@jessestricker/projen-projects.BaseProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@jessestricker/projen-projects.BaseProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@jessestricker/projen-projects.BaseProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@jessestricker/projen-projects.BaseProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@jessestricker/projen-projects.BaseProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@jessestricker/projen-projects.BaseProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@jessestricker/projen-projects.BaseProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@jessestricker/projen-projects.BaseProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@jessestricker/projen-projects.BaseProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@jessestricker/projen-projects.BaseProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.BaseProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@jessestricker/projen-projects.BaseProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@jessestricker/projen-projects.BaseProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@jessestricker/projen-projects.BaseProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@jessestricker/projen-projects.BaseProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@jessestricker/projen-projects.BaseProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@jessestricker/projen-projects.BaseProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@jessestricker/projen-projects.BaseProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@jessestricker/projen-projects.BaseProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@jessestricker/projen-projects.BaseProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@jessestricker/projen-projects.BaseProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@jessestricker/projen-projects.BaseProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@jessestricker/projen-projects.BaseProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jessestricker/projen-projects.BaseProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `cleanTask`<sup>Required</sup> <a name="cleanTask" id="@jessestricker/projen-projects.BaseProject.property.cleanTask"></a>

```typescript
public readonly cleanTask: Task;
```

- *Type:* projen.Task

---

##### `github`<sup>Optional</sup> <a name="github" id="@jessestricker/projen-projects.BaseProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.BaseProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@jessestricker/projen-projects.BaseProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Gradle <a name="Gradle" id="@jessestricker/projen-projects.Gradle"></a>

#### Initializers <a name="Initializers" id="@jessestricker/projen-projects.Gradle.Initializer"></a>

```typescript
import { Gradle } from '@jessestricker/projen-projects'

new Gradle(project: GradleProject, options: GradleOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.Gradle.Initializer.parameter.project">project</a></code> | <code><a href="#@jessestricker/projen-projects.GradleProject">GradleProject</a></code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.Gradle.Initializer.parameter.options">options</a></code> | <code><a href="#@jessestricker/projen-projects.GradleOptions">GradleOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@jessestricker/projen-projects.Gradle.Initializer.parameter.project"></a>

- *Type:* <a href="#@jessestricker/projen-projects.GradleProject">GradleProject</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@jessestricker/projen-projects.Gradle.Initializer.parameter.options"></a>

- *Type:* <a href="#@jessestricker/projen-projects.GradleOptions">GradleOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jessestricker/projen-projects.Gradle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jessestricker/projen-projects.Gradle.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@jessestricker/projen-projects.Gradle.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@jessestricker/projen-projects.Gradle.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@jessestricker/projen-projects.Gradle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@jessestricker/projen-projects.Gradle.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@jessestricker/projen-projects.Gradle.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@jessestricker/projen-projects.Gradle.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jessestricker/projen-projects.Gradle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jessestricker/projen-projects.Gradle.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@jessestricker/projen-projects.Gradle.isConstruct"></a>

```typescript
import { Gradle } from '@jessestricker/projen-projects'

Gradle.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@jessestricker/projen-projects.Gradle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@jessestricker/projen-projects.Gradle.isComponent"></a>

```typescript
import { Gradle } from '@jessestricker/projen-projects'

Gradle.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@jessestricker/projen-projects.Gradle.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.Gradle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jessestricker/projen-projects.Gradle.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.Gradle.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@jessestricker/projen-projects.Gradle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@jessestricker/projen-projects.Gradle.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `version`<sup>Required</sup> <a name="version" id="@jessestricker/projen-projects.Gradle.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---


### GradleProject <a name="GradleProject" id="@jessestricker/projen-projects.GradleProject"></a>

A Gradle project using the Kotlin DSL.

#### Initializers <a name="Initializers" id="@jessestricker/projen-projects.GradleProject.Initializer"></a>

```typescript
import { GradleProject } from '@jessestricker/projen-projects'

new GradleProject(options: GradleProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.GradleProject.Initializer.parameter.options">options</a></code> | <code><a href="#@jessestricker/projen-projects.GradleProjectOptions">GradleProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@jessestricker/projen-projects.GradleProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@jessestricker/projen-projects.GradleProjectOptions">GradleProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jessestricker/projen-projects.GradleProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.annotateGenerated">annotateGenerated</a></code> | Consider a set of files as "generated". |
| <code><a href="#@jessestricker/projen-projects.GradleProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |

---

##### `toString` <a name="toString" id="@jessestricker/projen-projects.GradleProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@jessestricker/projen-projects.GradleProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@jessestricker/projen-projects.GradleProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@jessestricker/projen-projects.GradleProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@jessestricker/projen-projects.GradleProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@jessestricker/projen-projects.GradleProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@jessestricker/projen-projects.GradleProject.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@jessestricker/projen-projects.GradleProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.GradleProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@jessestricker/projen-projects.GradleProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@jessestricker/projen-projects.GradleProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@jessestricker/projen-projects.GradleProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@jessestricker/projen-projects.GradleProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Consider a set of files as "generated".

This method is implemented by
derived classes and used for example, to add git attributes to tell GitHub
that certain files are generated.

###### `glob`<sup>Required</sup> <a name="glob" id="@jessestricker/projen-projects.GradleProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

---

##### `postSynthesize` <a name="postSynthesize" id="@jessestricker/projen-projects.GradleProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@jessestricker/projen-projects.GradleProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@jessestricker/projen-projects.GradleProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.GradleProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@jessestricker/projen-projects.GradleProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@jessestricker/projen-projects.GradleProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@jessestricker/projen-projects.GradleProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@jessestricker/projen-projects.GradleProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.GradleProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@jessestricker/projen-projects.GradleProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.GradleProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@jessestricker/projen-projects.GradleProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.GradleProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@jessestricker/projen-projects.GradleProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@jessestricker/projen-projects.GradleProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@jessestricker/projen-projects.GradleProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@jessestricker/projen-projects.GradleProject.isConstruct"></a>

```typescript
import { GradleProject } from '@jessestricker/projen-projects'

GradleProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@jessestricker/projen-projects.GradleProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@jessestricker/projen-projects.GradleProject.isProject"></a>

```typescript
import { GradleProject } from '@jessestricker/projen-projects'

GradleProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@jessestricker/projen-projects.GradleProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@jessestricker/projen-projects.GradleProject.of"></a>

```typescript
import { GradleProject } from '@jessestricker/projen-projects'

GradleProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@jessestricker/projen-projects.GradleProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.cleanTask">cleanTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.gradle">gradle</a></code> | <code><a href="#@jessestricker/projen-projects.Gradle">Gradle</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@jessestricker/projen-projects.GradleProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@jessestricker/projen-projects.GradleProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@jessestricker/projen-projects.GradleProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@jessestricker/projen-projects.GradleProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@jessestricker/projen-projects.GradleProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@jessestricker/projen-projects.GradleProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@jessestricker/projen-projects.GradleProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@jessestricker/projen-projects.GradleProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@jessestricker/projen-projects.GradleProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@jessestricker/projen-projects.GradleProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@jessestricker/projen-projects.GradleProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.GradleProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@jessestricker/projen-projects.GradleProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@jessestricker/projen-projects.GradleProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@jessestricker/projen-projects.GradleProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@jessestricker/projen-projects.GradleProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@jessestricker/projen-projects.GradleProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@jessestricker/projen-projects.GradleProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@jessestricker/projen-projects.GradleProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@jessestricker/projen-projects.GradleProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@jessestricker/projen-projects.GradleProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@jessestricker/projen-projects.GradleProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@jessestricker/projen-projects.GradleProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@jessestricker/projen-projects.GradleProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jessestricker/projen-projects.GradleProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `cleanTask`<sup>Required</sup> <a name="cleanTask" id="@jessestricker/projen-projects.GradleProject.property.cleanTask"></a>

```typescript
public readonly cleanTask: Task;
```

- *Type:* projen.Task

---

##### `github`<sup>Optional</sup> <a name="github" id="@jessestricker/projen-projects.GradleProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

---

##### `gradle`<sup>Required</sup> <a name="gradle" id="@jessestricker/projen-projects.GradleProject.property.gradle"></a>

```typescript
public readonly gradle: Gradle;
```

- *Type:* <a href="#@jessestricker/projen-projects.Gradle">Gradle</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.GradleProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@jessestricker/projen-projects.GradleProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

## Structs <a name="Structs" id="Structs"></a>

### BaseProjectOptions <a name="BaseProjectOptions" id="@jessestricker/projen-projects.BaseProjectOptions"></a>

Options for the base project.

#### Initializer <a name="Initializer" id="@jessestricker/projen-projects.BaseProjectOptions.Initializer"></a>

```typescript
import { BaseProjectOptions } from '@jessestricker/projen-projects'

const baseProjectOptions: BaseProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | The NPM dependencies used for development. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable the GitHub integration. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | The options for the GitHub integration. |
| <code><a href="#@jessestricker/projen-projects.BaseProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node package manager used to install dependencies and run scripts. |

---

##### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.BaseProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@jessestricker/projen-projects.BaseProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@jessestricker/projen-projects.BaseProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@jessestricker/projen-projects.BaseProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@jessestricker/projen-projects.BaseProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@jessestricker/projen-projects.BaseProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jessestricker/projen-projects.BaseProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@jessestricker/projen-projects.BaseProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@jessestricker/projen-projects.BaseProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@jessestricker/projen-projects.BaseProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@jessestricker/projen-projects.BaseProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@jessestricker/projen-projects.BaseProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@jessestricker/projen-projects.BaseProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

The NPM dependencies used for development.

---

##### `github`<sup>Optional</sup> <a name="github" id="@jessestricker/projen-projects.BaseProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@jessestricker/projen-projects.BaseProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

The options for the GitHub integration.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@jessestricker/projen-projects.BaseProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* javascript.NodePackageManager.NPM

The Node package manager used to install dependencies and run scripts.

---

### GradleOptions <a name="GradleOptions" id="@jessestricker/projen-projects.GradleOptions"></a>

#### Initializer <a name="Initializer" id="@jessestricker/projen-projects.GradleOptions.Initializer"></a>

```typescript
import { GradleOptions } from '@jessestricker/projen-projects'

const gradleOptions: GradleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.GradleOptions.property.version">version</a></code> | <code>string</code> | The Gradle version to use. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@jessestricker/projen-projects.GradleOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "8.14"

The Gradle version to use.

---

### GradleProjectOptions <a name="GradleProjectOptions" id="@jessestricker/projen-projects.GradleProjectOptions"></a>

The Gradle project options.

#### Initializer <a name="Initializer" id="@jessestricker/projen-projects.GradleProjectOptions.Initializer"></a>

```typescript
import { GradleProjectOptions } from '@jessestricker/projen-projects'

const gradleProjectOptions: GradleProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | The NPM dependencies used for development. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable the GitHub integration. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | The options for the GitHub integration. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node package manager used to install dependencies and run scripts. |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.gradleOptions">gradleOptions</a></code> | <code><a href="#@jessestricker/projen-projects.GradleOptions">GradleOptions</a></code> | *No description.* |
| <code><a href="#@jessestricker/projen-projects.GradleProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="@jessestricker/projen-projects.GradleProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@jessestricker/projen-projects.GradleProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@jessestricker/projen-projects.GradleProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@jessestricker/projen-projects.GradleProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@jessestricker/projen-projects.GradleProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@jessestricker/projen-projects.GradleProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@jessestricker/projen-projects.GradleProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@jessestricker/projen-projects.GradleProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@jessestricker/projen-projects.GradleProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@jessestricker/projen-projects.GradleProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@jessestricker/projen-projects.GradleProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@jessestricker/projen-projects.GradleProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@jessestricker/projen-projects.GradleProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

The NPM dependencies used for development.

---

##### `github`<sup>Optional</sup> <a name="github" id="@jessestricker/projen-projects.GradleProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable the GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@jessestricker/projen-projects.GradleProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

The options for the GitHub integration.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@jessestricker/projen-projects.GradleProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* javascript.NodePackageManager.NPM

The Node package manager used to install dependencies and run scripts.

---

##### `gradleOptions`<sup>Optional</sup> <a name="gradleOptions" id="@jessestricker/projen-projects.GradleProjectOptions.property.gradleOptions"></a>

```typescript
public readonly gradleOptions: GradleOptions;
```

- *Type:* <a href="#@jessestricker/projen-projects.GradleOptions">GradleOptions</a>
- *Default:* {}

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@jessestricker/projen-projects.GradleProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

---



