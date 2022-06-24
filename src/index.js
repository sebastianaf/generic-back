import express, { application } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import fs from "fs";

import { corsOptions } from "./config/cors";
import { morganOptions } from "./config/morgan";
import { logOptions } from "./config/log";

import { logCheck } from "./utils/tools";

require("dotenv").config();

var app = express();

/***
 * Middlewares
 */
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//Optional log
toInteger(process.env.API_LOG) ? app.use(
  morgan(morganOptions, {
    stream: fs.createWriteStream(logOptions.filePath, { flags: "a" }),
  })
) : null

0 ? console.log("0 is true") : console.log("0 is false")

app.use(morgan(morganOptions));

/***
 * Routes
 */
app.get("/", cors(corsOptions), (req, res) => {
  res.send("OK");
});

//Generic Route
import { postSomething } from "./routes/Route";
import { toInteger } from "lodash";
app.post("/something", cors(corsOptions), postSomething);

logCheck();

app.listen(process.env.API_PORT, () => {
  console.log(`Running on port ${process.env.API_PORT}`);
});
