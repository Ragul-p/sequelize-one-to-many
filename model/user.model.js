const Sequelize = require("sequelize");
const db = require("../config/db");



const userSchema = {
    username: {
        type: Sequelize.DataTypes.STRING,
    },
    password: {
        type: Sequelize.DataTypes.STRING
    }
}


const User = db.define("user", userSchema, {
    timestamps: false
});




module.exports = User;