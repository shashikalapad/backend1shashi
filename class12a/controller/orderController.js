
const {Order,validateOrder } = require('../models/order');
const log =require("debug")('app.db')

async function createOrder(req,res){
    const {error}= validateOrder(req.body);
    if(error)
    return req.status(400).send(error.details[0].message);
    const { customerName,product,price,quantity } = req.body;
    log("Creating a new order");
    try{
        const order = new Order({
            customerName,
            product,
            price,
            quantity,
            totalPrice:quantity * price,
        });
        const newOrder = await order.save()
        return res.status(201).json({
            msg:"Successfully created the order",
            data:newOrder,
        });
    }catch(err){
    return res.status(500).json({
    msg:"something went wrong......",
    error:err.message,
          })
    }
   };


async function getOrder(req,res){
    const { id} = req.query;
    try{
        const order = await Order.findById(id)
        if(!order)return res.status(404).send("order not found...");
      return res.status(200).json({
        data:order,
      })
    }catch(err){
        return res.status(500).json({
            msg:"something went wrong......",
            error:err.message,
        });
    }
   // console.log("id",id); 
   };


 async function updateOrder(req,res){
    const{id, price} = req.body;
    try{
        const order = await Order.findById(id);
        if(!order) return res.status(404).send("order not found..");

        order.price = price;
        order.totalPrice = price * order.quantity;
        const updatedOrder = await order.save();
        return res.status(200).json({
            msg:"Order updated suceessfully",
            dats:updatedOrder,
        });
      }catch(err){
        return res.status(500).json({
            msg:"something went wrong......",
            error:err.message,
        });
      }
   }

   async function deleteOrder(req,res){
    const { id } = req.body;
    try{
        const deletedOrder = await Order.findById(id);
        return res.status(200).json({
            msg:"order deleted successfully",
            data:deletedOrder,
        })
    }catch(err){
        return res.status(500).json({
            msg:"something went wrong......",
            error:err.message,
        }); 
    }    }
    

   module.exports ={
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    
   }