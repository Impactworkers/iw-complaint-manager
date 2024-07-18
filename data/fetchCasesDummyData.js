const query = require("./connectToDummyData");

const fetchData = async () => {
    try {
        const result = await query("SELECT * FROM cases_nonprod_data");
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

// fetchData();

module.exports = fetchData;
