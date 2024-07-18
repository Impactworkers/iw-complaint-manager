const { Pool } = require("pg");
const config = require("../config/config.json");

const devConfig = config.development;

const pool = new Pool({
    user: devConfig.username,
    host: "localhost",
    database: devConfig.database,
    password: devConfig.password,
    port: 5432
});

const query = async (text, params) => {
    const res = await pool.query(text, params);
    return res.rows;
};

module.exports = query;
