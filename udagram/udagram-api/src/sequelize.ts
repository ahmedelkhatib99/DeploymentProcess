import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
    username: "postgres",
    password: "12345678",
    database: "postgres",
    host: "database-1.chl1kfuz4ezd.us-east-1.rds.amazonaws.com",
    // username: config.username,
    // password: config.password,
    // database: config.database,
    // host: config.host,
    dialect: "postgres",
    storage: ":memory:"
});
