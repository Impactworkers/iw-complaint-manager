import { Sequelize } from "sequelize";

const DB_NAME = "iw_complaint_manager";
const DB_DIALECT = "postgres";
const DB_USER = "postgres";
const DB_HOST = "localhost";
const DB_PORT = 5432;
const DB_PASSWORD = "password";

export const sequelize = new Sequelize({
    database: DB_NAME,
    dialect: DB_DIALECT,
    username: DB_USER,
    host: DB_HOST,
    port: DB_PORT,
    password: DB_PASSWORD
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

testConnection();
