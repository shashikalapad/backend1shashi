const express = require("express");
const {validateCredentials} = require('../middleware/auth')
const router = express.Router();
const { createOrder,getOrder,updateOrder,deleteOrder, } = require("../controller/orderController.js");

   router.post('createOrder',validateCredentials,createOrder);
   router.get("/getOrder",getOrder);
   router.put('/ updateOrder,', updateOrder)
   router.delete("/deleteOrder",deleteOrder);
   

   module.exports = router;




