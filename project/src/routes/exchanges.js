import { Router } from "express"
import asyncErrorHandler from "express-async-handler"
import { extractExchangeRate } from "../service/coinapiproxy.js"
const router = Router();

router.get("/:asset_id_base/:asset_id_quote", asyncErrorHandler(async function (req, res) {
    try {
        const time = req.query.time;
        const assetIdBase = req.params.asset_id_base;
        const assetIdQuote = req.params.asset_id_quote;
        const result = await extractExchangeRate(assetIdBase, assetIdQuote, time);
        
        if (null !== result) {
            res.status(200).send(result.response);
        } else {
            return res.status(404).send({});
        }
    } catch (err) {
        console.log(err);

        return res.status(500).send({ message: err.message });
    }
}));

export default router;