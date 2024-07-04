
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






// const http = require('http');

// let options = {
// 	host: 'www.geeksforgeeks.org',
// 	path: '/courses',
// 	method: 'GET'
// };

// // Making a get request to
// // 'www.geeksforgeeks.org'
// http.request(options, (response) => {

// 	// Printing the statusCode
// 	console.log(`STATUS: ${response.statusCode}`);
// }).end();
