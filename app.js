// some core modules as follows
//http => Launch a server, send requests
//https => Launch a SSL server
//fs =>
//path =>
//os =>
// const http = require('http');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // console.log('In another middleware here');
  // res.status(404).send('<h1>Page not found</h2>')
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

// const routes = require('./routes');
// app.use((req, res, next) => {
//   console.log('In the middleware here');
//   next(); // Allow the request to continue next middleware in line
// })

// app.use('/', (req, res, next) => {
//   console.log('This always runs!');
//   // res.send('<h1>Hello from "Always" Page</h2>');
//   next();
// });
// app.use(/)

//  const server = http.createServer(routes.handler);
//  const server = http.createServer(app);
//  => {
  // console.log(req.url, req.method, req.headers);
  // const method = req.method;
  // const url = req.url;
  
// });

// server.listen(3000);
app.listen(3000);