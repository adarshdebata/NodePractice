const cluster = require("cluster");
const http = require("http");

// if (cluster.isWorker) {
//   console.log("I am a worker");
// } else {
//   console.log("I am a master");
//   cluster.fork();
//   cluster.fork();
// }

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // If it's a worker process, create an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from Worker ${process.pid}\n`);
    })
    .listen(8080);

  console.log(`Worker ${process.pid} started`);
}

// setTimeout(() => {
//     console.log("Parent process timeout, exiting...");
//     process.exit();
//   }, 3000);

/*
 
                          Master Process
                             (PID: M)
                                 |
            +--------------------+--------------------+
            |                                                               |
    Worker Process 1 (PID: W1)                Worker Process 2 (PID: W2)
         |                                                              |
    HTTP Server                                HTTP Server
      on port 8080                                on port 8080

 */
