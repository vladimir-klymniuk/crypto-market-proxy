import axios from 'axios';
import util from 'util';
import config from '../../config/config.js';
import RateEvent from "../events/types/rate-event.js";
import { EventEmitter } from "../event-emitter.js";
import ExchangeDTO from "../dto/meta/ExchangeDTO.js";

const instance = axios.create({
    baseURL: 'https://rest.coinapi.io',
    timeout: 10000,
    headers: {  'X-CoinAPI-Key' : '904852FA-4D54-433A-AB3A-7029253B658C'}
});

/**
 * @return ResponseDTO[]
 */
export async function extractCurrencies() {
    let path = '/v1/exchanges';
    let result = await extract(path);

    return result.data.map( item => new ExchangeDTO(
        item.exchange_id,
        item.website,
        item.name,
        item.data_start,
        item.data_end,
        item.data_quote_start,
        item.data_quote_end,
        item.data_orderbook_start,
        item.data_orderbook_end,
        item.data_trade_start,
        item.data_trade_end,
        item.data_symbols_count,
        item.volume_1hrs_usd,
        item.volume_1day_usd,
        item.volume_1mth_usd
    ));
}

// export
// GET /v1/exchangerate/{asset_id_base}/{asset_id_quote}?time={time}
// let response = new ExchangeRateDTO();

/**
 * @return ExchangeRateDTO
 */
export async function extractExchangeRate(assetIdBase, assetIdQuote, time = null) {
    const path = `/v1/exchangerate/${assetIdBase}/${assetIdQuote}`;
    const params = {}

    if (null !== time) {
        params = { "time" : time };
    }

    let result = await extract(path, params);

    console.log(1);
    // GET /v1/exchanges
    // let dto = new ResponseDTO();
    // let item = new ExchangeRateDTO();
}

async function extract(path, parameters = {}) {
    try {
        console.log(0);

     return  await instance.get(path, { params: parameters })
          .then(function (response) {
                return response;
          })
          .catch(function (error) {
            console.log(2);
          });
        //   .then(function () {
        //     console.log(3);
        //   });  
        
        console.log(4);

        console.log(5);
          
        // axios.get(path, {});            
        // axios.get('/user/12345', {
        //     cancelToken: source.token
        // }).catch(function (thrown) {
        //   if (axios.isCancel(thrown)) {
        //      console.log('Request canceled', thrown.message);
        //   } else {
        //    // handle error
        //   }
        // });

        // const response = await axios.get('/user?ID=12345');
        // console.log(11);
        // console.log(11);
        // const req = await https.get(options, (res) => {
        //     console.log('statusCode:', res.statusCode);
        //     console.log('headers:', res.headers);

        //     res.on('data', (d) => {
        //         // process.stdout.write(d);
        //     });
        // });

        // req.on('error', (e) => {
        //     console.error(e);
        // });
        // req.end();

        // console.log(1);

        // return req;
        // var request = https.request(options, function (response) {
        //     var chunks = [];
        //     response.on("data", function (chunk) {
        //       chunks.push(chunk);
        //     });
        //   });

        //   req.on('error', (e) => {
        //     console.error(e);
        //   });

        //   request.end();

        return res;
    } catch (err) {

        console.log(22);
    }

 
    return 0;
};