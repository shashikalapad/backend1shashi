const  mongoose = require("mongoose");
const Joi = require("joi");


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


const validateOrder = (order)=>{
    const schema = Joi.object({
        customerName:Joi.string().min(5).max(15).required(),
        product:Joi.string().required(),
        price:Joi.number().min(0),
        quantity:Joi.number().min(1),

    })
    return schema.validate(order);
   }

   module.exports= {
    Order,
    validateOrder,
   }