var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(start());
  response.end();
}).listen(1112);


function start(){
ndata = new Date();
hours = ndata.getHours();
mins = ndata.getMinutes();
secs = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
if (hours < 10) {hours = "0" + hours }
if (mins < 10) {mins = "0" + mins }
if (secs < 10) {secs = "0" + secs}
datastr = ( hours + ":" + mins + ":"+secs );
return datastr;
}
//document.write(start());
