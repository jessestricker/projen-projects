import { Project, ProjectOptions } from "projen";

export interface BaseProjectOptions extends ProjectOptions {}

export class BaseProject extends Project {
  constructor(options: BaseProjectOptions) {
    super(options);
  }
}
