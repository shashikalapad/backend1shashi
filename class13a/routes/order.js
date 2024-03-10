const express = require("express");
const {validateCredentials} = require('../middleware/auth')
const router = express.Router();
const { createOrder,getOrder,getOrders,updateOrder,deleteOrder, } = require("../controller/orderController.js");

   router.post('createOrder',validateCredentials,createOrder);
   router.get("/getOrder",getOrder);
   router.get("/getOrders",getOrders);
   router.put('/ updateOrder,', updateOrder)
   router.delete("/deleteOrder",deleteOrder);
   

   module.exports = router;




