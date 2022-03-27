import eventEmitter from "events";
import fs from "fs";
import path from "path";

export const EventEmitter = new eventEmitter();


import { MESSAGE_NEW_RATE } from './events/types.js';
import { logError, logDebug } from "./logger.js";

EventEmitter.on(MESSAGE_NEW_RATE, async (event) => {
    try {
            
    } catch (err) {
        logError(err)
    }
});