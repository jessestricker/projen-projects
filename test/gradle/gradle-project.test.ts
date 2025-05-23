import { Testing } from "projen";
import { GradleProject } from "../../src/gradle";

describe("GradleProject", () => {
  test("matches snapshot", () => {
    const project = new GradleProject({
      name: "gradle-project",
      gradleVersion: "8.14",
    });

    const snapshot = Testing.synth(project);

    expect(snapshot).toMatchSnapshot();
  });
});
