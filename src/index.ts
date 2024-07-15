import { intro, outro, select, isCancel, cancel, text } from "@clack/prompts";
import {
  saveNumber,
  allFilesPopulated,
  displayAllNumbers,
} from "./fileHandler";

// this is cli app can be run using npm run start
async function main() {
  intro(`Welcome to the Alart CLI App! ��`);
  while (true) {
    const inputNumber = await text({
      message: "Enter a number (or 'cancel' to exit): ",
      defaultValue: "10",
    });
    if (isCancel(inputNumber)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }
    const num = parseInt(inputNumber, 10);
    if (isNaN(num)) {
      console.error("Invalid input. Please enter a number.");
      continue;
    }
    const result = num * 7;
    if (result > 140) {
      saveNumber("A", num);
    } else if (result > 100) {
      saveNumber("B", num);
    } else if (result > 60) {
      saveNumber("C", num);
    } else {
      saveNumber("D", num);
    }

    if (allFilesPopulated()) {
      console.log("All files are populated. The process is complete.");
      displayAllNumbers();
    }
  }
}

main();
