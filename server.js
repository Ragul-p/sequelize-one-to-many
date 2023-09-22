const express = require("express");
const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");
const app = express();
const port = process.env.PORT || 5000;
const Post = require("./model/post.model");
const User = require("./model/user.model");




const db = require("./config/db");
db.authenticate().then(function () { console.log("DB Connection Successful (:"); })
    .catch(function () { console.log("DB Connection Error !!!"); });
//1.
// User.hasMany(Post);
// Post.belongsTo(User);

//2.
User.hasMany(Post, { onDelete: 'CASCADE' });
Post.belongsTo(User, { onDelete: 'CASCADE' });


db.sync({ alter: true }).then(function () { console.log("sync Table Successful (:"); })
    .catch(function () { console.log("sync Table Error !!!"); });



app.use("/api/user", require("./router/user.post.route"));



app.listen(port, function () {
    console.log(`server is listening on port ${port}`);
});
