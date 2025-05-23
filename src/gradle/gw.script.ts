import * as child_process from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

function main() {
  const scriptFileName =
    process.platform === "win32" ? "gradlew.bat" : "gradlew";

  const scriptFile = findFileUp(scriptFileName);
  if (scriptFile === undefined) {
    console.error("error: gradlew script file not found");
    process.exitCode = 1;
    return;
  }

  const scriptArgs = process.argv.slice(2);
  child_process.spawnSync(scriptFile, scriptArgs, {
    stdio: "inherit",
    shell: true,
  });
}

function findFileUp(name: string) {
  let searchDir = process.cwd();

  while (true) {
    const filePath = path.join(searchDir, name);
    if (isFile(filePath)) {
      return filePath;
    }

    const searchDirParent = path.dirname(searchDir);
    if (searchDirParent === searchDir) {
      return undefined;
    }

    searchDir = searchDirParent;
  }
}

function isFile(file: string) {
  const stats = fs.statSync(file, { throwIfNoEntry: false });
  return stats?.isFile() ?? false;
}

main();
