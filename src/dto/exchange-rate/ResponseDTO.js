import RateDTO from "./RateDTO";

export default class ResponseDTO {
    /**
     * @param {string}      time 
     * @param {string}      assetIdQuote 
     * @param {RateDTO[]}   rates
     */
    constructor(time, assetIdQuote, rates = []) {
        this._time = time;
        this._asset_id_quote = assetIdQuote;
        this._rates = rates;
    }

    /**
     * @returns {string}
     */
    getTime() {
        return this._time;
    }

    /**
     * @returns {string}
     */
    getAssetIdQuote() {
        return this._asset_id_quote;
    }

    /**
     * @returns {RateDTO[]}
     */
    getRates() {
        return this._rates;
    }
}