var Sequelize = require("sequelize");
var db = require("../config/database");

var { DataTypes } = Sequelize;
var RegisterModel = db.define("login", {
  
}, {
    freezeTableName: true
});

module.exports = RegisterModel