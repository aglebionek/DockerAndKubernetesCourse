const keys = require("./keys");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {Pool} = require("pg");
const redis = require("redis");

/** @type {express.Application} */
const app = new express();
app.use(cors());
app.use(bodyParser.json());


//#region postgres client setup
    const pgClient = new Pool({
            user: keys.pgUser,
            host: keys.pgHost,
            database: keys.pgDatabase,
            password: keys.pgPassword,
            port: keys.pgPassword
    });
    pgClient.on("connect", (client) => {
        client.query("CREATE TABLE IF NOT EXISTS values (number INT)").catch((err) => console.error(err));
    });
//#endregion


//#region redis client setup
    const redisClient = redis.createClient({
        host: keys.redisHost,
        port: keys.rediClient,
        retry_strategy: () => 1000
    });

    const redisPublisher = redisClient.duplicate();
//#endregion


//#region express route handlers
    app.get("/", (req, res) => {
        res.send("Hi");
    });

    app.get("/values/all", async (req, res) => {
        const values = await pgClient.query("SELECT * FROM values");
        res.send(values.rows);
    });

    app.get("/values/current", async (req, res) => {
        redisClient.hgetall('values', (err, values) => res.send(values));
    });

    app.post("/values", async (req, res) => {
        const index = req.body.index;

        if (parseInt(index) > 40) {
            return res.status(422).send("Fib index too high");
        };

        redisClient.hset("values", index, "Nothing yet!");
        redisPublisher.publish("insert", index);
        pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);

        res.send({working: true})
    })
//#endregion


app.listen(5000, console.log("listening"));