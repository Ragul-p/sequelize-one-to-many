const Sequelize = require("sequelize");

const db = require("../config/db");

const postSchema = {
    message: {
        type: Sequelize.DataTypes.STRING,
    }
}


const Post = db.define("post", postSchema, {
    timestamps: false
});



module.exports = Post;