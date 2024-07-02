require("dotenv").config();

const config = {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "relational_db",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "relational_db_test",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME || "prod_username",
    password: process.env.DB_PASSWORD || "prod_password",
    database: process.env.DB_NAME || "prod_database",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
};

module.exports = config[process.env.NODE_ENV || "development"];
