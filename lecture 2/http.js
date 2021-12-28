const http = require("http");

// temporary database
const users = [
    {
        name: "Ahmed",
        age: 22
    },
    {
        name: "Ali",
        age: 24
    }
]

const server = http.createServer((req, res) => {
    console.log(`request on ${req.url} with method ${req.method}`);
    if (req.url === "/search") {
        res.write("<h1>hello from my server</h1>");
        res.write("<p>this the search page</p>");
        res.end();
    }
    else if (req.url === "/index") {
        res.write("<h1>Index</h1>");
        res.write("<p>this the index page</p>");
        res.end();
    }
    else if (req.url === "/users") {
        res.write("<h1>Users</h1>");
        res.write(JSON.stringify(users));
        res.end();
    }
    else {
        res.write("<h1>404-not found</h1>")
        res.end()
    }
});

server.listen(3000)
