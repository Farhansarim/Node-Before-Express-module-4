const fs = require('fs');

const requestHandler = (req, res) => {
    const  url = req.url;
    const  method = req.method;

    if(url === '/') {
      //   res.write('<html>');
      // res.write('<head> <title>Enter Message</title><head>');
      // res.write(
      //   '<body> <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
      // res.write('</html>');<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head> <title>Farhan | Node Training</title><head>');
      res.write('<body> <h1>Hey Welcome My First Page!</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form><body>');
      res.write('</html>');
      return res.end();
      }

      if(url === '/users') {
        //   res.write('<html>');
        // res.write('<head> <title>Enter Message</title><head>');
        // res.write(
        //   '<body> <form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>');
        // res.write('</html>');
        res.write('<html>');
        res.write('<head><title>Node Training</title><head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul><body>');
        res.write('</html>');
        return res.end();
        }
      
      if(url === '/create-user' && method === 'POST') {
        // console.log('create user=>', )
        const body = [];
        req.on('data',(chunk) => {
          console.log('chunk', chunk);
          body.push(chunk);
        });
        return req.on('end', () => {
         const parseBody = Buffer.concat(body).toString();
         const message = parseBody.split('=')[1]; // username=whenever -the-user-entered
        //  fs.writeFile('message.txt', message, (err) => {
         console.log('parseBody here', message);
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
        //  });
        });
      }
      if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data',(chunk) => {
          console.log('chunk', chunk);
          body.push(chunk);
        });
        return req.on('end', () => {
         const parseBody = Buffer.concat(body).toString();
         console.log('parseBody', parseBody);
         const message = parseBody.split('=')[1]; // username=whenever -the-user-entered
         fs.writeFile('message.txt', message, (err) => {
          res.statusCode = 302;
          res.setHeader('Location', '/');
          return res.end();
         });
        });
      }
    
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head> <title>My first Page</title><head>');
      res.write('<body> <h1>Hey From my Node.js server</h1><body>');
      res.write('</html>');
      res.end();
};

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   someText: 'some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

exports.handler = requestHandler;
exports.someText = 'some hard coded text';
