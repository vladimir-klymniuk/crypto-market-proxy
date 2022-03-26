import axios from 'axios';
import util from 'util';
import config from '../../config/config.js';
import RateEvent from "../events/types/rate-event.js";
import { EventEmitter } from "../event-emitter.js";

const instance = axios.create({
    baseURL: 'https://rest.coinapi.io/v1',
    timeout: 10,
    headers: { 'X-CoinAPI-Key': config.coinapi.apikey }
});

  
// const options = {
//     hostname: 'rest.coinapi.io/v1',
//     port: 443,
//     path: '/',
//     method: 'GET',
//     headers: { 'X-CoinAPI-Key': config.coinapi.apikey },
// };

// GET /v1/exchanges
// let dto = new ResponseDTO();
// let item = new ExchangeRateDTO();

/**
 * @return ResponseDTO
 */
export async function extractCurrencies() {
    let path = 'rest.coinapi.io/v1/exchanges';
    let localOptions = options;
    localOptions.path = path;

    let result = await extract(localOptions);
    console.log(result);
    process.exit(1);
}

// export
// GET /v1/exchangerate/{asset_id_base}/{asset_id_quote}?time={time}
// let response = new ExchangeRateDTO();

/**
 * @return ExchangeRateDTO
 */
export async function extractExchangeRate(assetIdBase, assetIdQuote, time = null) {
    const path = `rest.coinapi.io/v1/exchangerate/${assetIdBase}/${assetIdQuote}`;
    const params = {}

    if (null !== time) {
        params = { "time" : time };
    }

    let result = await extract(path, params);
}

async function extract(path, parameters = {}) {
    try {
        console.log(0);

       let response = await axios.get(path, { params: parameters })
          .then(function (response) {
                return response;
          })
          .catch(function (error) {
            console.log(2);
          })
          .then(function () {
            console.log(3);
          });  
        
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
    } catch (err) {

        console.log(22);
    }

 
};