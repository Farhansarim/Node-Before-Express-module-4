const path = require('path');

const express = require('express');

const routDir = require('../util/path');


const router = express.Router();
// /admin/add-product => Get
router.get('/add-product', (req, res, next) => {
    console.log('In another middleware here');
    res.sendFile(path.join(routDir, 'views', 'add-product.html'))
  });
  
//   router.get('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
//   });
 
  // /admin/add-product => Post
  router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  }); 

module.exports = router;