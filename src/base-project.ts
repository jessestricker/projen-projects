import { Project, ProjectOptions } from "projen";

export interface BaseProjectOptions extends ProjectOptions {}

export class BaseProject extends Project {
  constructor(options: BaseProjectOptions) {
    if (options.projenrcJson || options.projenrcJsonOptions) {
      throw new Error(".projenrc.json not supported");
    }

    super(options);
  }
}
