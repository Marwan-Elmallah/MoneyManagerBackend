const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const accountRoutes = require("./route.account");
const categoryRoutes = require("./route.category");
const currencyRoutes = require("./route.currency");
const transactionRoutes = require("./route.transaction");
const transferRoutes = require("./route.transfer");
const authRoutes = require("./route.auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/accounts", accountRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/currencies", currencyRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;