import EventEmitter from "../../event-emitter";
import { MESSAGE_NEW_RATE } from '../types';
import { logError, logDebug } from "../../logger";

EventEmitter.on(MESSAGE_NEW_RATE, async (event) => {
    try {
        // write to storage
    } catch (err) {
        logError(err)
    }
});