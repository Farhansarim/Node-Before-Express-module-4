// some core modules as follows
//http => Launch a server, send requests
//https => Launch a SSL server
//fs =>
//path =>
//os =>
const http = require('http');

const express = require('express');

const app = express();

// const routes = require('./routes');
app.use((req, res, next) => {
  console.log('In the middleware here');
  next(); // Allow the request to continue next middleware in line
})

app.use((req, res) => {
  console.log('In another middleware here');
  res.send('<h1>Hello from ExpressJs</h2>')
})
//  const server = http.createServer(routes.handler);
//  const server = http.createServer(app);
//  => {
  // console.log(req.url, req.method, req.headers);
  // const method = req.method;
  // const url = req.url;
  
// });

// server.listen(3000);
app.listen(3000);