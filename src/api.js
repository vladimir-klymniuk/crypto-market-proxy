import express from "express";
import config from "../config/config.js";
import { logError, logInfo } from "./logger.js";
import cors from "cors";
import exchanges from "./routes/exchanges.js";
import meta from "./routes/meta.js";

let app = express();

app.use(cors({maxAge: 3600}));
app.use('/exchanges', meta);
app.use('/exchangerate', exchanges);

app.listen(config.httpPort, function onReady () {
    logInfo(`Web server is listening on port ${ config.httpPort }`);
});

process.on("unhandledRejection", async (reason, p) => {
    logError(`Unhandled rejection occurred, reason: ${ reason }`, p);
    process.exit(1);
});

export default app;

// Task Description:
// Create API service which allows to get price information for specific crypto currency (e.g. BTC, ETH, etc.)
// Business requirements:
// Service should be acting as REST API and implement its best practices. Default format for returned data should be JSON. Information about cryptocurrencies should be stored in database.
// You should implement the following endpoints:
// 1. Get list of supported crypto currencies.                                                         
// 2. Get price information for specific cryptocurrency(s), this endpoint also should return time of the update of each cryptocurrency.

// Technical requirements
// Application should be written with NodeJS framework. Data provider for real time and historical prices should be https://CoinAPi.io . 
// Documentation located by this url: https://docs.coinapi.io/#md-docs

// For the historical prices you should use REST API,
// and for the real time data you need to use
// WebSocket API. API Key can be obtained via data provider website, they have FREE plan which
// should be enough to do the task. All configuration files required to run the service should be provided within the code. 
// You should provide the ability to run entire solution via Docker.
// Procedure of running the application must be documented and provided within the solution.