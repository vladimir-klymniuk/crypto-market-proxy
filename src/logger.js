function wrap (symbol, array) {
    return [`[${ symbol }]`, new Date().toLocaleString(), "|"].concat(array);
}

export function logInfo (...args) {
    console.info.apply(console, wrap("INFO", args));
}

export function logError (...args) {
    console.error.apply(console, wrap("ERR", args));
}