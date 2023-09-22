const Sequelize = require("sequelize");
const { Op } = Sequelize;
const User = require("../model/user.model");
const Post = require("../model/post.model");








async function create(req, res) {
    // await User.bulkCreate([
    //     { username: "a", password: "1" },
    //     { username: "b", password: "2" },
    //     { username: "c", password: "3" },
    //     { username: "d", password: "4" },
    //     { username: "e", password: "5" }

    // ])

    await Post.bulkCreate([
        { message: "aaa" },
        { message: "bbb" },
        { message: "ccc" },
        { message: "ddd" },
        { message: "eee" },

    ])
    return res.status(200).json({ message: "success" });
}




async function read(req, res) {

    // const user = await User.findOne({ username: "a" });
    // const post = await Post.findAll();


    //1. user.addPost(post);
    //2. const data = await user.countPosts(post);
    //3. user.removePost(post);
    //4. const destroy = await User.destroy({ where: { username: "a" } });

    const user = await User.findOne();
    const post = await Post.findOne();
    post.setUser(user);

    return res.status(200).json({ user, post });
}








module.exports = {
    create, read
}
