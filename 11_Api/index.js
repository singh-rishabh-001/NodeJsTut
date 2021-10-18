// api data : https://jsonplaceholder.typicode.com/users
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  //synchronous and one time load
  const data = fs.readFileSync("./userApi.json", "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.write("<h1>Home</h1>");
    res.end();
  } else if (req.url == "/userapi") {
    res.write("<h1>User api</h1>");

    // asynchronous
    // fs.readFile("./userApi.json", "utf-8", (err, data) => {
    //   if (err) {
    //     console.log(`error = ${err}`);
    //   } else {
    //     // console.log(data);
    //     // res.write(data);
    //     const objData = JSON.parse(data);
    //     res.write(JSON.stringify(objData[0]));
    //   }
    //   res.end();
    // });
    res.write(data);
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is started");
});
