import { Router } from "express"
import asyncErrorHandler from "express-async-handler"
const router = Router();

//TODO: Type Scripting?

// Get specific currency rate
// GET /v1/exchangerate/{asset_id_base}/{asset_id_quote}?time={time}

// router.get("/:asset_id_base/:asset_id_quote", asyncErrorHandler(async function (req, res) {
//     const time = req.query.time;
//     let response = new ExchangeRateDTO();

//     // const ip = req.params.ip;
//     // const country = await countryExplore(ip);

//     // if (null != country) {
//     //     res.status(200).send(new CountryDTO(country).response);
//     // } else {
//     //     return res.status(404).send({});
//     // }
// }));

export default router;