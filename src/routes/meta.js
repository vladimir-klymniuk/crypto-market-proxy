import { Router } from "express";
import asyncErrorHandler from "express-async-handler";
const logger = import("../logger.js");
import { extractCurrencies } from "../service/coinapiproxy.js"

const router = Router();

// TODO Read result from saved cache file if exists.
router.get("/", asyncErrorHandler(async function (req, res) {
    try {
        let result = await extractCurrencies();
        if (null !== result) {
            res.status(200).send(result.response);
        } else {
            return res.status(404).send({});
        }
    } catch (err) {
        return res.status(500).send({ message: err.message});
    }
}));

export default router;