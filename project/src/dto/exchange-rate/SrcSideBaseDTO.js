export default class SrcSideBaseDTO {
    /**
     * @param {string} time   "2022-03-26T23:20:08.5000000Z"
     * @param {string} asset  "XTZ"
     * @param {number} rate   4456.019061890416
     * @param {number} volume 44456.019061890416
     */
    constructor(time, asset, rate, volume) {
        this._time = time;
        this._asset = asset;
        this._rate = rate;
        this._volume = volume;
    }

    /**
     * @returns {string}    "2022-03-26T23:20:08.5000000Z"
     */
    get time() {
        return this._time;
    }

    /**
     * @returns {string}    "XTZ"
     */
    get asset() {
        return this._asset;
    }

    /**
     * @returns {number}    44456.019061890416
     */
    get rate() {
        return this._rate;
    }

    /**
     * @returns {number}    5435182.381306132
     */
    get volume() {
        return this._volume;
    }

    /**
     * returns { volume: 5435182.381306132, rate: 44456.019061890416, asset: "XTZ", time: "2022-03-26T23:20:08.5000000Z" }
     */
    get response() {
        return {
            time: this.time,
            asset: this.asset,
            rate: this.rate,
            volume: this.volume
        }
    }
}