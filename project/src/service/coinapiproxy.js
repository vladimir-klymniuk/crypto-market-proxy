import axios from 'axios';
import config from '../../config/config.js';
import { logInfo, logError } from "../logger.js";
import RateEvent from "../events/types/rate-event.js";
import ExchangeDTO from "../dto/meta/ExchangeDTO.js";
import ExchangeRateResponseDTO from "../dto/exchange-rate/ExchangeRateResponseDTO.js";
import SrcSideBaseDTO from "../dto/exchange-rate/SrcSideBaseDTO.js";
import { MESSAGE_NEW_RATE } from '../events/types.js';
import { EventEmitter } from "../event-emitter.js";

const instance = axios.create({
    baseURL: config.coinapi.baseURL,
    timeout: config.coinapi.timeout,
    headers: {
        'X-CoinAPI-Key' : config.coinapi.apikey,
    },
});

/**
 * @return { ResponseDTO[] }
 */
export async function extractCurrencies() {
    logInfo(
        'ExtractCurrencies',
        new Date()
    );
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
};

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

    logInfo(
        'Event published.', 
        new Date(), 
        MESSAGE_NEW_RATE,
        data.asset_id_base,
        data.asset_id_quote,
        data.rate,
    );

    EventEmitter.emit(MESSAGE_NEW_RATE, new RateEvent(new Date(), dto));

    return dto;
};

/**
 * @param {String}  path 
 * @param {JSON}    parameters 
 * @param {Boolean} retry
 * 
 * @returns {Object}
 */
async function extract(path, parameters = {}, retry = false) {
    logInfo('External request', new Date(), path, parameters);

    try {
        return await instance.get(path, { params: parameters })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {

                if (fasle === retry) {
                    logError(
                        'External request. Failed.',
                        new Date(),
                        path,
                        parameters,
                        error.name,
                        error.message,
                    );

                    return extract(path, parameters, true);
                }

                throw error;
            });
    } catch (err) {
        logError(
            'External request. Retry - Failed.',
            new Date(),
            path,
            parameters,
            error.name,
            error.message,
        );

        throw new Error(error.message);
    }
};