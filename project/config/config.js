const env = process.env;

export default {
    env: env,
    debug: env.APP__DEBUG === "yes",
    httpPort: env.API_PORT || 8080,
    coinapi: {
        apikey: env.COINAPI_APIKEY || '904852FA-4D54-433A-AB3A-7029253B658C',
        baseURL: env.BASE_URL || 'https://rest.coinapi.io',
        timeout: env.TIMEOUT || 10000,
    }
}