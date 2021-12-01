const keys = require("./keys");
const redis = require("redis");

const rediClient = redis.createClient({
    host: keys.redisHost,
    port: keys.rediClient,
    retry_strategy: () => 1000
});

const subscription = rediClient.duplicate();

function fib(index) {
    if (index < 2) return 1;
    return fib(index-1) + fib(index-2)
}

subscription.on('message', () => {
    rediClient.hset('values', message, fib(parseInt(message)))
})

subscription.subscribe('insert');