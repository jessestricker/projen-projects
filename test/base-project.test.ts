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

  test("disallows .projenrc.json", () => {
    expect(() => {
      new BaseProject({
        name: "base-project",
        projenrcJson: true,
      });
    }).toThrow(".projenrc.json");

    expect(() => {
      new BaseProject({
        name: "base-project",
        projenrcJsonOptions: {},
      });
    }).toThrow(".projenrc.json");
  });
});
