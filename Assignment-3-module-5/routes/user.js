const express = require('express');
const path = require('path');

const routDir = require('../util/path');

const routers = express.Router();

routers.get('/users', (req, res, next) => {
    console.log('Farhan Learning Node');
res.sendFile(path.join(routDir, 'views', 'user.html' ));
});

routers.post('/add-user', (req, res, next) => {
    console.log('Farhan node Assignment');
res.send('<h1>Farhan 2nd Project added</h1>');
});

module.exports = routers;

