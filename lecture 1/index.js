const fs = require("fs");

const todoList = [
    {
        id: 0,
        value: "Study nodeJs"
    },
    {
        id: 1,
        value: "Finish the lab"
    }
];

// fs.writeFileSync("data.txt", "hello from nodeJs");

fs.writeFileSync("database.txt", todoList);

// const result = fs.readFileSync("./data.txt", "utf-8")

// console.log(result);