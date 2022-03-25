import https from 'https';
// implement config

const options = {
    hostname: 'https://rest.coinapi.io/v1',
    port: 443,
    path: '/',
    method: 'GET'
    // https
  };


// GET /v1/exchanges
// let dto = new ResponseDTO();
// let item = new ExchangeRateDTO();

export async function extractCurrencies() {
    
    // const req = https.request(options, (res) => {
    //     console.log('statusCode:', res.statusCode);
    //     console.log('headers:', res.headers);
      
    //     res.on('data', (d) => {
    //       process.stdout.write(d);
    //     });
    //   });
      
    //   req.on('error', (e) => {
    //     console.error(e);
    //   });
    //   req.end();
}

// export
// GET /v1/exchangerate/{asset_id_base}/{asset_id_quote}?time={time}
//     let response = new ExchangeRateDTO();

export async function extractExchangeRate(assetIdBase, assetIdQuote, time) {

}