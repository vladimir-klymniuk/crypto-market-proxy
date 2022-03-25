export default class ExchangeRateDTO {

    /**
     * @param {string} time 
     * @param {string} assetIdBase 
     * @param {string} assetIdQuote 
     * @param {number} rate 
     */
    constructor(time, assetIdBase, assetIdQuote, rate) {
        this._time = time;
        this._asset_id_base = assetIdBase;
        this._asset_id_quote = assetIdQuote;
        this.rate = rate;
    }

    /**
     * {string} "2017-08-09T14:31:18.3150000Z"
     */
    get time() {
        return this._time;
    }

    /**
     * {string} "BTC"
     */
    get assetIdBase() {
        return this._asset_id_base;
    }

    /**
     * {string} "USD"
     */
    get assetIdQuote() {
        return this._asset_id_quote;
    }

    /**
     * {number} 3260.3514321215056208129867667
     */
    get rate() {
        return this.rate;
    }
}