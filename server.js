import { createRequestHandler } from "@remix-run/express";
import express from "express";
import https from "https";
import fs from "fs";
import process from "process";

// notice that the result of `remix vite:build` is "just a module"
import * as build from "./build/server/index.js";
import { sequelize } from "./server/sequelize_config.cjs";

const app = express();
app.use(express.static("build/client"));

// change this string to make sure backend reload works
app.get("/api/data", (req, res) => {
    res.json("Hello, this is your data!");
});

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

const options = {
    key: fs.readFileSync(".cert/localhost-key.pem"),
    cert: fs.readFileSync(".cert/localhost.pem")
};

https.createServer(options, app).listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
});

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database synced");
    })
    .catch((err) => {
        console.log("sequelize error", err);
    });
