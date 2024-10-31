const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const userRouters = require('./routes/user');


const app = express();

// app.use('/users', (req, res, next) => {
//     console.log('Farhan Learning Node');
// res.send('<h1>Users Assignment</h1>');
// });

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRouters);

app.use((req, res, next) => {
    // console.log('In another middleware here');
    // res.status(404).send('<h1>Page not found</h2>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
  });

app.listen(3000);