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