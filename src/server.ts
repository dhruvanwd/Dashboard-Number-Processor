import * as express from "express";
import { Request, Response } from "express";
import * as path from "path";
import { saveNumber } from "./fileHandler";

// configures dotenv to work in your application
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use(express.json());

app.post("/add-numbers", (req: Request, res: Response) => {
  const { num } = req.body;
  // 1 to 25
  if (num < 1 || num > 25) {
    return res
      .status(400)
      .json({ error: "Invalid input. Number should be between 1 and 25." });
  }
  const result = num * 7;
  if (result > 140) {
    saveNumber("A", num);
    res.json({ message: "Number added successfully to file A" });
  } else if (result > 100) {
    saveNumber("B", num);
    res.json({ message: "Number added successfully to file B" });
  } else if (result > 60) {
    saveNumber("C", num);
    res.json({ message: "Number added successfully to file C" });
  } else {
    saveNumber("D", num);
    res.json({ message: "Number added successfully to file D" });
  }
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
