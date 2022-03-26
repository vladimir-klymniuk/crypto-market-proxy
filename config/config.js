const env = process.env;

export default {
    env: env,
    debug: env.APP__DEBUG === "yes",
    httpPort: env.API_PORT || 8080,
    coinapi: {
        apikey: env.COINAPI_APIKEY, 
    }
}