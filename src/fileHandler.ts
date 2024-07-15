import { writeFileSync, readFileSync, existsSync } from "fs";

const files = ["A", "B", "C", "D"];

export function saveNumber(file: string, number: number): void {
  const fileName = `file${file}.txt`;
  let content = "";
  if (existsSync(fileName)) {
    content = readFileSync(fileName, "utf-8");
  }
  content += number + "\n";
  writeFileSync(fileName, content, "utf-8");
}

export function readNumbers(file: string): string[] {
  const fileName = `file${file}.txt`;
  if (!existsSync(fileName)) return [];
  const content = readFileSync(fileName, "utf-8");
  return content.split("\n").filter((line) => line.trim() !== "");
}

export function allFilesPopulated(): boolean {
  return files.every((file) => readNumbers(file).length > 0);
}

export function displayAllNumbers(): void {
  files.forEach((file) => {
    const numbers = readNumbers(file);
    console.log(`File ${file}:`, numbers.join(", "));
  });
}
