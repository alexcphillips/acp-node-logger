const express = require("express");
const apLogger = require("../apLogger.js");
const routes = require("./routes");

const app = express();
const morgan = require("morgan");

app.use(apLogger("detailed"));
// app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

module.exports = app;
