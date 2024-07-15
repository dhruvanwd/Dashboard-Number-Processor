# Node.js Dashboard Number Processor 🚀

###### This Node.js project processes a number inputted by a client through a dashboard. The number, ranging from 1 to 25, is multiplied by 7. Based on the resulting value, the number is stored in one of four files: A, B, C, or D. Once each file has one stored number, no new numbers can be entered, and the process completes. The application also lists all numbers saved in the four files.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Usage

To start the project, use one of the following commands:

- For CLI usage:
  ```bash
  npm run cli:start
  ```

- For server usage:
  ```bash
  npm start
  ```

## Features

- Multiplies the input number by 7.
- Stores the result in one of four files based on specified conditions.
- Prevents further input once each file has a stored number.
- Displays all numbers saved in the files.

## Dependencies

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) - TypeScript language
- [Nodemon](https://nodemon.io/) - Tool to automatically restart the server
- [ts-node](https://github.com/TypeStrong/ts-node) - TypeScript execution environment for Node.js

## Configuration

The project uses the following scripts:

- `"cli:start"`: Runs the application in CLI mode using `ts-node`.
- `"start"`: Starts the server with `nodemon`.

Add these scripts to the `package.json` file:

```json
"scripts": {
  "cli:start": "ts-node src/index.ts",
  "start": "nodemon src/server.ts"
}
```

## Documentation

1. **Input Processing**:
   - The user inputs a number between 1 and 25.
   - The number is multiplied by 7.

2. **File Storage**:
   - If the result is greater than 140, it goes to File A.
   - If the result is greater than 100, it goes to File B.
   - If the result is greater than 60, it goes to File C.
   - Any other result goes to File D.

3. **Completion Condition**:
   - Once a number is stored in all four files (A, B, C, and D), no further numbers can be entered, and the process is complete.

4. **Display Saved Numbers**:
   - The application lists all numbers saved in each of the four files.

## Examples

- Input: 5
  - Process: 5 * 7 = 35
  - Storage: File D

- Input: 21
  - Process: 21 * 7 = 147
  - Storage: File A

## Troubleshooting

If you encounter issues starting the application, ensure you have the necessary dependencies installed by running:

```bash
npm install
```

If the problem persists, check the configuration in the `package.json` file and ensure the scripts are correctly defined.

## Contributors

- [Sumit Kumar](https://github.com/yourusername) - Initial work

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

🌟 This README provides a comprehensive overview of the Node.js Dashboard Number Processor project. If you have any questions or need further assistance, feel free to contact the contributors. 🚀