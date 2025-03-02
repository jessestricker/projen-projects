import { Testing } from "projen";
import { BaseProject } from "../src";

describe("BaseProject", () => {
  test("matches snapshot", () => {
    const project = new BaseProject({
      name: "base-project",
    });

    const snapshot = Testing.synth(project);

    expect(snapshot).toMatchSnapshot();
  });
});
