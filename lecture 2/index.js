// const utils = require("./utils");

// const data = utils.readJsonSync("./database.json");

// utils.writeJsonSync("./database.json", ["number"])

// const { readJsonSync, writeJsonSync } = require("./utils");

// const data = readJsonSync("./database.json");

// writeJsonSync("./database.json", ["number"])

const fs = require("fs-extra");

const data = fs.readJSONSync("./database.json");

console.log(data);

fs.writeJSONSync("./database.json", ["number"]);