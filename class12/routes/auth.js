const express = require('express');
const router = express.Router();
const {login} = require('../controller/authController');




router.post('/',login)
   // return res.send('this is auth router');
   

module.exports = router;