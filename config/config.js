const env = process.env;
console.log(process.env);
process.exit(1)

export default {
    env: env,
    debug: env.APP__DEBUG === "yes",
    httpPort: env.API_PORT || 8080,
    coinapi: {
        apikey: env.COINAPI_APIKEY, 
    }
}