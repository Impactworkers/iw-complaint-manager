import { createRequestHandler } from "@remix-run/express";
import express from "express";

// notice that the result of `remix vite:build` is "just a module"
import * as build from "./build/server/index.js";

const app = express();
app.use(express.static("build/client"));

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});

app.get("/api/data", (req, res) => {
  res.json("Hello, this is your data!"); // change this string to make sure backend reload works
});
