const express = require("express");
const router = express.Router();
const { createOrder,getOrder,updateOrder,deleteOrder, } = require("../controller/orderController");

   router.post('createOrder',createOrder);
   router.get("/getOrder",getOrder);
   router.put('/ updateOrder,', updateOrder)
   router.delete("/deleteOrder",deleteOrder);
   

   module.exports = router;




