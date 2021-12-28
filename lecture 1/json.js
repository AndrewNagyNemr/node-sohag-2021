const fs = require("fs");

const result = fs.readFileSync("./database.json", "utf-8");

// console.log(typeof result);

const parsedResult = JSON.parse(result)

// console.log(typeof parsedResult);

// console.log(parsedResult[0].name);

parsedResult.push({
    name: "Andrew",
    age: 28
});

fs.writeFileSync("database.json", JSON.stringify(parsedResult))
// fs.writeFileSync("database.json", JSON.stringify([]))