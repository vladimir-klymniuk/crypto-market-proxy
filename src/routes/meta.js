import { Router } from "express";
import asyncErrorHandler from "express-async-handler";
const logger = import("../logger.js");
import { extractCurrencies } from "../service/coinapiproxy.js"

const router = Router();
// GET /v1/exchanges
// TODO Read result from saved cache file if exists.

router.get("/", asyncErrorHandler(async function (req, res) {
    // let res;

    try {
        let re = await extractCurrencies()
        console.log(11);
    } catch (err) {
        console.log(err);
    }
    // let dto = new ResponseDTO();
    // let item = new ExchangeRateDTO();
}));

export default router;