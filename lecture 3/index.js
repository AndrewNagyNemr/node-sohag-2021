const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/user");

const app = express();

app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/mydb")
    .then(() => console.log("successfully connected with the database"))
    .catch(() => {
        console.log("error connecting to mongodb");
    });

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});


app.post("/users", async (req, res) => {
    const { age, name } = req.body;
    const newUser = new User({ name, age });
    await newUser.save();
    res.json(newUser);
});


app.listen(3000, () => {
    console.log("server running on port 3000");
});
