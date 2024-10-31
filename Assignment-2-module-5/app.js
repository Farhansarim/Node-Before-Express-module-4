const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('Farhan Learning Node');
res.send('<h1>Users Assignment</h1>');

})

app.use('/', (req, res, next) => {
    console.log('Farhan node Assignment');
res.send('<h1>Farhan 1st Project</h1>');
})

app.listen(3000);