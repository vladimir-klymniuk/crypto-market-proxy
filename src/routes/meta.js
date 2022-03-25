import { Router } from "express"
import asyncErrorHandler from "express-async-handler"
const router = Router();

// GET /v1/exchanges
router.get("/", asyncErrorHandler(async function (req, res) {
    let res;
    // let dto = new ResponseDTO();
    // let item = new ExchangeRateDTO();

}));



// router.get("/", asyncErrorHandler(async function (req, res) {
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

// GET /v1/exchanges/{exchange_id}
// GET /v1/exchanges?filter_exchange_id={filter_exchange_id}

// curl https://rest.coinapi.io/v1/exchanges \
//   --request GET 
//   --header "X-CoinAPI-Key: 73034021-THIS-IS-SAMPLE-KEY"
// 904852FA-4D54-433A-AB3A-7029253B658C

// curl https://rest.coinapi.io/v1/exchanges \
//   --request GET \
//   --header "X-CoinAPI-Key: 904852FA-4D54-433A-AB3A-7029253B658C"

// GET /v1/exchanges
// [
//     {
//     "exchange_id": "OKCOIN_CNY",
//     "website": "https://www.okcoin.cn/",
//     "name": "OKCoin CNY",
//     "data_start": "2013-06-12",
//     "data_end": "2018-03-09",
//     "data_quote_start": "2015-02-15T12:53:50.3430000Z",
//     "data_quote_end": "2018-03-09T23:34:52.5800000Z",
//     "data_orderbook_start": "2015-02-15T12:53:50.3430000Z",
//     "data_orderbook_end": "2018-03-09T23:34:52.5800000Z",
//     "data_trade_start": "2013-06-12T14:24:24.0000000Z",
//     "data_trade_end": "2017-11-01T16:30:39.7077259Z",
//     "data_symbols_count": 2,
//     "volume_1hrs_usd": 0.0,
//     "volume_1day_usd": 0.0,
//     "volume_1mth_usd": 0.0
//     },
//     {
//     "exchange_id": "HUOBI",
//     "website": "https://www.huobi.com/",
//     "name": "Huobi (HBUS)",
//     "data_start": "2015-03-29",
//     "data_end": "2019-11-03",
//     "data_quote_start": "2015-03-29T21:46:06.2630000Z",
//     "data_quote_end": "2019-11-03T18:22:29.1837496Z",
//     "data_orderbook_start": "2015-03-29T21:46:06.2630000Z",
//     "data_orderbook_end": "2019-11-03T18:23:53.2859878Z",
//     "data_trade_start": "2015-03-29T21:46:08.7030000Z",
//     "data_trade_end": "2019-11-03T18:21:48.2770000Z",
//     "data_symbols_count": 403,
//     "volume_1hrs_usd": 1605.80,
//     "volume_1day_usd": 59957.44,
//     "volume_1mth_usd": 1259508.43
//     }
// ]

export default router;