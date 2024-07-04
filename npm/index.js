const http = require("http");
const Port = 3000 ;


let server = http.createServer((req, res )=>{
    res.write("<h1>Hello Server<h1>")


    res.end();
});

server.listen(Port,function(error){
 if (error)
        console.log(`Something Went wrong : ` +error);
 else
        console.log(`The HTTP server is running on port : ${Port}`);
});
