/*
 1. web server which will handles all the http requests of web application.
 2. Node.js provides capabilities to create own web server which will handle requests asynchronously.
    no need of third party server.

 3. the http.createServer() method includes request and response parameters which is supplied by nodejs
 4. request is used to get the information
 5. response is used to send the response
*/

const http = require("http");

//by default require callback function with two parameters
const server = http.createServer((req, res) => {
  res.end("Hello from the other sides");
});

// listen incoming requests
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});

// now go to browser and write
// localhost:8000
