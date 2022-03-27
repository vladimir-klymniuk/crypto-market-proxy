export default class RateEvent {
    /**
     * @param {DateTime}  "2017-08-09T14:31:18.3150000Z"
     * @param {ExchangeRateResponseDTO}
     */
    constructor(time, dto) {
        this.time = time;
        this.dto = dto;
    }

    /**
     * @return {String}
     */
    get time() {
        return this._time;
    }

    /**
     * @return {ExchangeRateResponseDTO}
     */
    get dto() {
        return this._assetIdBase;
    }
}