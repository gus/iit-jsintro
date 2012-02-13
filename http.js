var util = require("util"),
    http = require("http");

// What's happening here then?
var server = http.createServer(function (request, response) {
  util.log(request.url);
  response.writeHead(200, {
    "Content-Type": "text/plain",
    "X-SomethingFunny": "A joke"
  });
  response.write("Hello World\n");
  response.end();
});

server.listen(8000);

util.puts("Server running at http://127.0.0.1:8000/");

