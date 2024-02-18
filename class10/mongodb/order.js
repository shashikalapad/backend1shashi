const express = require("express");
const mongoose = require('mongoose');
const log =require("debug")('app.db')

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/playground')
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log('Error occured while creating mongodb',err))

//schema
const orderSchema = new mongoose.Schema({
    customerName:{type:String,required:true},
    product:String,
    price:Number,
    quantity:Number,
    date:{type:Date,default:Date.now},
    totalPrice:Number,

});
//create Model
const Order = mongoose.model("Order",orderSchema)
//create Order--->post method
app.post('/createOrder',async(req,res)=>{
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
   });
   //read order--->get method
   // use of query.params
   app.get("/getOrder",async(req,res)=>{
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
   });
   //update data---put method
   app.post("/updateOrder",async(req,res)=>{
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
   })
   app.delete("/deleteOrder",async(req,res)=>{
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
    }
   });




app.listen(5000,()=>console.log("server is running on 5000..."));