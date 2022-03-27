SET NAMES 'utf8';

CREATE DATABASE IF NOT EXISTS `PROXY_API` DEFAULT CHARACTER SET utf8
COLLATE utf8_general_ci;

USE `PROXY_API`;

-- DROP TABLE IF EXISTS

-- class ExchangeRateResponseDTO
--     /**
--      * @param {String}           assetIdBase 
--      * @param {String}           assetIdQuote 
--      * @param {Number}           rate 
--      * @param { SrcSideBaseDTO[] } srcSideBase 
--      */
--     constructor(assetIdBase, assetIdQuote, rate, srcSideBase = []) {
--         this._assetIdBase   = assetIdBase
--         this._assetIdQuote  = assetIdQuote
--         this._rate          = rate
--         this._srcSideBase   = srcSideBase
--     }

-- class SrcSideBaseDTO
--     /**
--      * @param {string} time   "2022-03-26T23:20:08.5000000Z"
--      * @param {string} asset  "XTZ"
--      * @param {number} rate   4456.019061890416
--      * @param {number} volume 44456.019061890416
--      */
--     constructor(time, asset, rate, volume) {
--         this._time = time;
--         this._asset = asset;
--         this._rate = rate;
--         this._volume = volume;
--     }

--- TOTAL LIST OF AVAILABLE QUERIES 
-- ExchangeDTO {
--     /**
--      * @param {String} exchangeId         "OKCOIN_CNY",
--      * @param {String} website            "https://www.okcoin.cn/"
--      * @param {String} name               "OKCoin CNY"
--      * @param {String} dataStart          "2013-06-12"
--      * @param {String} dataEnd            "2018-03-09"
--      * @param {String} dataQuoteStart     "2015-02-15T12:53:50.3430000Z"
--      * @param {String} dataQuoteEnd       "2018-03-09T23:34:52.5800000Z"
--      * @param {String} dataOrderbookStart "2015-02-15T12:53:50.3430000Z"
--      * @param {String} dataOrderbookEnd   "2018-03-09T23:34:52.5800000Z"
--      * @param {String} dataTradeStart     "2013-06-12T14:24:24.0000000Z"
--      * @param {String} dataTradeEnd       "2017-11-01T16:30:39.7077259Z"
--      * @param {Number} dataSymbolsCount   2
--      * @param {Number} volume1hrsUsd      0.0
--      * @param {Number} volume1dayUsd      0.0
--      * @param {Number} volume1mthUsd      0.0