export default class ExchangeDTO {
    
    /**
     * @param {String} exchangeId         "OKCOIN_CNY",
     * @param {String} website            "https://www.okcoin.cn/"
     * @param {String} name               "OKCoin CNY"
     * @param {String} dataStart          "2013-06-12"
     * @param {String} dataEnd            "2018-03-09"
     * @param {String} dataQuoteStart     "2015-02-15T12:53:50.3430000Z"
     * @param {String} dataQuoteEnd       "2018-03-09T23:34:52.5800000Z"
     * @param {String} dataOrderbookStart "2015-02-15T12:53:50.3430000Z"
     * @param {String} dataOrderbookEnd   "2018-03-09T23:34:52.5800000Z"
     * @param {String} dataTradeStart     "2013-06-12T14:24:24.0000000Z"
     * @param {String} dataTradeEnd       "2017-11-01T16:30:39.7077259Z"
     * @param {Number} dataSymbolsCount   2
     * @param {Number} volume1hrsUsd      0.0
     * @param {Number} volume1dayUsd      0.0
     * @param {Number} volume1mthUsd      0.0
     */
    constructor(
        exchangeId,
        website,
        name,
        dataStart,
        dataEnd,
        dataQuoteStart,
        dataQuoteEnd,
        dataOrderbookStart,
        dataOrderbookEnd,
        dataTradeStart,
        dataTradeEnd,
        dataSymbolsCount,
        volume1hrsUsd,
        volume1dayUsd,
        volume1mthUsd
    ) {
        this._exchange_id = exchangeId;
        this._website = website;
        this._name = name;
        this._data_start = dataStart;
        this._data_end = dataEnd;
        this._data_quote_start = dataQuoteStart;
        this._data_quote_end = dataQuoteEnd;
        this._data_orderbook_start = dataOrderbookStart;
        this._data_orderbook_end = dataOrderbookEnd;
        this._data_trade_start = dataTradeStart;
        this._data_trade_end = dataTradeEnd;
        this._data_symbols_count = dataSymbolsCount;
        this._volume_1hrs_usd = volume1hrsUsd;
        this._volume_1day_usd = volume1dayUsd;
        this._volume_1mth_usd = volume1mthUsd;
    }

    /**
     * @returns {String}    "OKCOIN_CNY"
     */
    getExchangeId() {
        return this._exchange_id;
    }

    /**
     * @returns {String}    "https://www.okcoin.cn/"
     */
    getWebsite() {
        return this._website;
    }

    /**
     * @returns {String}    "OKCoin CNY"
     */
    getName() {
        return this._name;
    }

    /**
     * @returns {String}    "2013-06-12"
     */
    getDataStart() {
        return this._data_start; 
    }

    /**
     * @returns {String}    "2018-03-09"
     */
    getDataEnd() {
        return this._data_end;
    }

    /**
     * @returns {String}    "2015-02-15T12:53:50.3430000Z"
     */
    getDataQuoteStart() {
        return this._data_quote_start;
    }

    /**
     * @returns {String}    "2018-03-09T23:34:52.5800000Z"
     */
    getDataQuoteEnd() {
        return this._data_quote_end;
    }

    /**
     * @returns {String}    "2015-02-15T12:53:50.3430000Z"
     */
    getDataOrderbookStart() {
        return this._data_orderbook_start;
    }

    /**
     * @returns {String}    "2018-03-09T23:34:52.5800000Z"
     */
    getDataOrderbookEnd() {
        return this._data_orderbook_end;
    }

    /**
     * @returns {String}    "2013-06-12T14:24:24.0000000Z"
     */
    getDataTradeStart() {
        return this._data_trade_start;
    }

    /**
     * @returns {String}    "2017-11-01T16:30:39.7077259Z"
     */
    getDataTradeEnd() {
        return this._data_trade_end;
    }

    /**
     * @returns {Number}    2
     */
    getDataSymbolsCount() {
        return this._data_symbols_count;
    }

    /**
     * @returns {Number}    0.0
     */
    getVolume1hrsUsd() {
        return this._volume_1hrs_usd;
    }

    /**
     * @returns {Number}    0.0
     */
    getVolume1dayUsd() {
        return this._volume_1day_usd;
    }

    /**
     * @returns {Number}    0.0
     */
    getVolume1mthUsd() {
        return this._volume_1mth_usd;
    }
}