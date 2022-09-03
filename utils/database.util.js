const { Sequelize, DataTypes } = require ("sequelize")

//Establishing the database conection...
const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "cezan27",
    port: 5432,
    database: "attendance-system",
    logging: false
});

//exporting const db...
module.exports = { db, DataTypes }