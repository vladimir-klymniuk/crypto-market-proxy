import EventEmitter from "events";
import fs from "fs";

// await
fs.reddirSync(__dirname + '/listeners').forEach(function (file) {
    require(__dirname + '/listeners/' + file);
});

//register event listeners

export default EventEmitter();
// const EventEmitter = require('events');
// let fs = require('file-system');