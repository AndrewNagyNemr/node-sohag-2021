const fs = require("fs");

const readJsonSync = (path) => {
    const result = fs.readFileSync(path, "utf-8");
    return JSON.parse(result)
}

const writeJsonSync = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data))
}

// module.exports = {
//     readJsonSync: readJsonSync,
//     writeJsonSync: writeJsonSync
// }

module.exports = {
    readJsonSync,
    writeJsonSync
}