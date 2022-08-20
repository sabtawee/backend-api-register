const Sequeliize = require('sequelize')

const db = new Sequeliize("ragnarok2022", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    define:{
        timestamps: false,
    },
})

module.exports = db;
