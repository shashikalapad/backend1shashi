const express = require('express');
const router = express.Router();
const {createUser} = require('../controller/userController')


router.post('/',createUser)
//return res.send('users router');
module.exports = router;