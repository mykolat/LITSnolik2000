var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(1112);

function random(){
  var arr = [1, 8, 4, 1, 2, 1, 2];



  return "" + (arr[0]*arr[arr[0]]* arr[arr[4]])
}
