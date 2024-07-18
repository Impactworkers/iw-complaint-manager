const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json")["development"]; // Adjust if using a different environment

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

// Define your model
const CasesData = sequelize.define(
    "CasesData",
    {
        CASE_ID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        TYPE: {
            type: DataTypes.STRING,
            allowNull: false
        },
        DATE: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        CREATOR: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LOCATION: {
            type: DataTypes.STRING,
            allowNull: false
        },
        STATUS: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ASSIGNEE: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false, // Disable timestamps fields (createdAt, updatedAt)
        tableName: "cases_nonprod_data" // Adjust table name if needed
    }
);

// Upload data from CSV to database
async function uploadData() {
    try {
        const csvFilePath = path.join(
            __dirname,
            "..",
            "data",
            "casesDummyData.csv"
        );
        await sequelize.sync({ force: true }); // Sync models to database (drops and recreates tables)
        await CasesData.bulkCreate(
            fs
                .readFileSync(csvFilePath, "utf8")
                .split("\n")
                .slice(1) // Skip header row
                .map((line) => line.split(","))
                .map(
                    ([
                        CASE_ID,
                        TYPE,
                        DATE,
                        CREATOR,
                        LOCATION,
                        STATUS,
                        ASSIGNEE
                    ]) => ({
                        CASE_ID: parseInt(CASE_ID, 10), // Ensure CASE_ID is an integer
                        TYPE,
                        DATE: new Date(DATE), // Convert DATE to a Date object
                        CREATOR,
                        LOCATION,
                        STATUS,
                        ASSIGNEE
                    })
                )
        );
        console.log("Dummy data uploaded successfully.");
    } catch (error) {
        console.error("Error uploading data:", error);
    } finally {
        await sequelize.close(); // Close database connection
    }
}

uploadData();
