import axios from 'axios';
import util from 'util';
import config from '../../config/config.js';
import RateEvent from "../events/types/rate-event.js";
import { EventEmitter } from "../event-emitter.js";
import ExchangeDTO from "../dto/meta/ExchangeDTO.js";
import ExchangeRateResponseDTO from "../dto/exchange-rate/ExchangeRateResponseDTO";
import SrcSideBaseDTO from "../dto/exchange-rate/SrcSideBaseDTO";
import RateEvent from "../events/types/rate-event";
import { MESSAGE_NEW_RATE } from '../events/types';

// todo: read from config
const instance = axios.create({
    baseURL: 'https://rest.coinapi.io',
    timeout: 10000,
    headers: {  'X-CoinAPI-Key' : '904852FA-4D54-433A-AB3A-7029253B658C'}
});

/**
 * @return { ResponseDTO[] }
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

/**
 * @return { ExchangeRateResponseDTO }
 */
export async function extractExchangeRate(assetIdBase, assetIdQuote, time = null) {
    const path = `/v1/exchangerate/${assetIdBase}/${assetIdQuote}`;
    const requestParameters = {}

    if (null !== time) {
        requestParameters = { "time" : time };
    }

    let result = await extract(path, requestParameters);
    let data = result.data;
    
    const dto =  new ExchangeRateResponseDTO(
        data.asset_id_base,
        data.asset_id_quote,
        data.rate,
        data.src_side_base.map( item => new SrcSideBaseDTO(item.time, item.asset, item.volume))    
    );

    EventEmitter.emit(MESSAGE_NEW_RATE, new RateEvent(new Date(), dto));

    return dto;
}

/**
 * 
 * @param {String} path 
 * @param {JSON}   parameters 
 * 
 * @returns 
 */
async function extract(path, parameters = {}) {
    try {
        return await instance
            .get(path, { params: parameters })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                // logger
                console.log(2);
            });
    } catch (err) {
            // logger
        console.log(22);
    }

    // err obj
    return 0;
};