const { sequelize } = require("../models/index.js");

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection successful.");

        await sequelize.sync({ alter: true });
    } catch (error) {
        console.error("Unable to connect to database:", error);
    }
})();

module.exports = { sequelize };
