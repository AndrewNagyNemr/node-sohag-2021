const fs = require("fs");

const [, , command, arg1] = process.argv;

const todos = fs.readFileSync("./todo.json", "utf-8");
const parsedTodos = JSON.parse(todos)

switch (command) {
    
    case "show":
        console.log(parsedTodos);
        break;
    case "add":
        parsedTodos.push({
            id: parsedTodos[parsedTodos.length - 1].id + 1,
            value: arg1
        })
        break;
    case "delete":
                // id 
        break;
    case "find": // id => value 
                // id from argv is string

        break;

    case "edit": // Bonus // id // newValue

        break;

}

fs.writeFileSync("./todo.json", JSON.stringify(parsedTodos))