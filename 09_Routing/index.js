const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);

  if (req.url == "/") {
    res.end("hello world at home");
  } else if (req.url == "/about") {
    res.write("hello world at aboutus");
    res.end();
  } else {
    //   but in the network tab of browser we can see that
    // 200 status but it should show 404 status
    // res.end("404 Page Not Found");
    // now we have to write like
    res.writeHead(404, { "Content-type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
