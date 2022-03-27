export default class ExchangeRateResponseDTO {
    /**
     * @param {String}              assetIdBase    BTC
     * @param {String}              assetIdQuote   USD
     * @param {Number}              rate           44453.580628721786
     * @param { SrcSideBaseDTO[] }  srcSideBase    []
     */
    constructor(assetIdBase, assetIdQuote, rate, srcSideBase = []) {
        this._assetIdBase   = assetIdBase
        this._assetIdQuote  = assetIdQuote
        this._rate          = rate
        this._srcSideBase   = srcSideBase
    }

    /**
     * @return {String}     'BTC'
     */
    get assetIdBase() {
        return this._assetIdBase;
    }

    /**
     * @return {String}     'USD'
     */
    get assetIdQuote() {
        return this._assetIdQuote;
    }

    /**
     * @return {Number}     44453.580628721786
     */
    get rate() {
        return this._rate;
    }

    /**
     * @return {SrcSideBaseDTO[]}
     */
    get srcSideBase() {
        return this._srcSideBase;
    }

    get response() {
        return {
            asset_id_base: this.assetIdBase,
            asset_id_quote: this.assetIdQuote,
            rate: this.rate,
            src_side_base: this.srcSideBase.map (item => item.response)
        }
    }
}