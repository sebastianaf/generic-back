import express, { application } from "express";
import cors from "cors";
import morgan from "morgan";
import fs from 'fs'
import path from 'path'

import { corsOptions } from "./config/cors";
import { morganOptions } from "./config/morgan";

require("dotenv").config();

var app = express();

/***
 * Middlewares
 */
app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan(morganOptions, {
    stream: fs.createWriteStream(path.join(__dirname, "../log/api.log"), {flags: 'a'})
}));
app.use(morgan(morganOptions))

/***
 * Routes
 */
 app.get("/", cors(corsOptions), (req, res) => {
    res.send("OK")
});

//Generic Route
import { postSomething } from "./routes/Route";
app.post("/something", cors(corsOptions), postSomething);


app.listen(process.env.API_PORT, () => {
  console.log(`Running on port ${process.env.API_PORT}`);
});
