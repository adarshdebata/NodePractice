// without Express 
// const http = require('http');
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');

//   if (req.url === '/') {
//     res.statusCode = 200;
//     res.write(`
//       <h1>Home Page</h1>
//       <p><a href="/about">Go to About Page</a></p>
//     `);
//   } else if (req.url === '/about') {
//     res.statusCode = 200;
//     res.write(`
//       <h1>About Page</h1>
//       <p><a href="/">Go to Home Page</a></p>
//     `);
//   } else {
//     res.statusCode = 404;
//     res.write('<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>');
//   }
//   res.end();
// });
// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


// ********************************************************************************************************
// With Express

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/about">Go to About Page</a>');
});


app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><a href="/">Go to Home Page</a>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});