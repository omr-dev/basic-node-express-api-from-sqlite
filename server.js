import express from "express";

const app = express();
const host = "http://127.0.0.1";
const port = 3001;
app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});
app.listen(port, () => {
  console.log(`Server runs on ${host}:${port}`);
});
