const path = require("path");

const express = require("express");

const routDir = require('../util/path');


const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another middleware here');
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(routDir, 'views', 'shop.html'));
  });


  module.exports = router;