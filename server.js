import { createRequestHandler } from "@remix-run/express";
import express from "express";

// notice that the result of `remix vite:build` is "just a module"
import * as build from "./build/server/index.js";

const app = express();
app.use(express.static("build/client"));

// change this string to make sure backend reload works
app.get("/api/data", (req, res) => {
    res.json("Hello, this is your data!");
});

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
});
