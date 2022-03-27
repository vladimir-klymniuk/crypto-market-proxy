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
    get exchangeId() {
        return this._exchange_id;
    }

    /**
     * @returns {String}    "https://www.okcoin.cn/"
     */
    get website() {
        return this._website;
    }

    /**
     * @returns {String}    "OKCoin CNY"
     */
    get name() {
        return this._name;
    }

    /**
     * @returns {String}    "2013-06-12"
     */
    get dataStart() {
        return this._data_start; 
    }

    /**
     * @returns {String}    "2018-03-09"
     */
    get dataEnd() {
        return this._data_end;
    }

    /**
     * @returns {String}    "2015-02-15T12:53:50.3430000Z"
     */
    get dataQuoteStart() {
        return this._data_quote_start;
    }

    /**
     * @returns {String}    "2018-03-09T23:34:52.5800000Z"
     */
    get dataQuoteEnd() {
        return this._data_quote_end;
    }

    /**
     * @returns {String}    "2015-02-15T12:53:50.3430000Z"
     */
    get dataOrderbookStart() {
        return this._data_orderbook_start;
    }

    /**
     * @returns {String}    "2018-03-09T23:34:52.5800000Z"
     */
    get dataOrderbookEnd() {
        return this._data_orderbook_end;
    }

    /**
     * @returns {String}    "2013-06-12T14:24:24.0000000Z"
     */
    get dataTradeStart() {
        return this._data_trade_start;
    }

    /**
     * @returns {String}    "2017-11-01T16:30:39.7077259Z"
     */
    get dataTradeEnd() {
        return this._data_trade_end;
    }

    /**
     * @returns {Number}    2
     */
    get dataSymbolsCount() {
        return this._data_symbols_count;
    }

    /**
     * @returns {Number}    0.0
     */
    get volume1hrsUsd() {
        return this._volume_1hrs_usd;
    }

    /**
     * @returns {Number}    0.0
     */
    get volume1dayUsd() {
        return this._volume_1day_usd;
    }

    /**
     * @returns {Number}    0.0
     */
    get volume1mthUsd() {
        return this._volume_1mth_usd;
    }

    /**
     * @returns {JSON}
     */
    get response() {
        return {
            exchange_id: this.exchangeId,
            website: this.website,
            name: this.name,
            data_start: this.dataStart,
            data_end: this.dataEnd,
            data_quote_start: this.dataQuoteStart,
            data_quote_end: this.dataQuoteEnd,
            data_orderbook_start: this.dataOrderbookStart,
            data_orderbook_end: this.dataOrderbookEnd,
            data_trade_start: this.dataTradeStart,
            data_trade_end: this.dataTradeEnd,
            data_symbols_count: this.dataSymbolsCount,
            volume_1hrs_usd: this.volume1hrsUsd,
            volume_1day_usd: this.volume1dayUsd,
            volume_1mth_usd: this.volume1mthUsd,
        };
    }
}