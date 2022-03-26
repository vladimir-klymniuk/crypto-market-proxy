export default class RateEvent {
    /**
     * @param {String}   time           "2017-08-09T14:31:18.3150000Z"
     * @param {String}   assetIdBase    "BTC"
     * @param {String}   assetIdQuote   "USD"
     * @param {Number}   rate           3260.3514321215056208129867667
     * @param {DateTime} eventDate      "2017-08-09T14:31:18.3150000Z"
     */
    constructor(time, assetIdBase, assetIdQuote, rate, eventDate) {
        this._time = time;
        this._assetIdBase = assetIdBase;
        this._assetIdQuote = assetIdQuote;
        this._rate = rate;
        this._eventDate = eventDate;
    }

    /**
     * @return {String}
     */
    get time() {
        return this._time;
    }

    /**
     * @return {String}
     */
    get assetIdBase() {
        return this._assetIdBase;
    }

    /**
     * @return {String}
     */
    get assetIdQuote() {
        return this._assetIdQuote;
    }

    /**
     * @return {Number}
     */
    get rate() {
        return this._rate;
    }

    /**
     * @return {DateTime}
     */
    get eventDate() {
        return this._eventDate;
    }
}