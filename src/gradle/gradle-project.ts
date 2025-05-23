import { BaseProject, BaseProjectOptions } from "../base-project";
import { Gradle, GradleOptions } from "./gradle";

/**
 * The Gradle project options.
 */
export interface GradleProjectOptions
  extends BaseProjectOptions,
    GradleOptions {}

/**
 * A Gradle project using the Kotlin DSL.
 */
export class GradleProject extends BaseProject {
  readonly gradle: Gradle;

  constructor(options: GradleProjectOptions) {
    super(options);

    this.gradle = new Gradle(this, options);
  }
}
