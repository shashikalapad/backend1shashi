const express = require("express");
const router = express.Router();
const {validate} = require('../helper/validate');
// const Joi =require('joi');-->move to helper/validate.js file
const cars = [
    {id:1,name:"mahindra"},
    {id:2,name:"ferrari"},
    {id:3,name:"honda"},
];


router.get('/',(req,res)=>{
    return res.send(cars);
});

router.get("/check/:name/:age",(req,res)=>{
    return res.send(req.params);
   });
  


router.get("/:id",(req,res)=>{
        const { id } = req.params;
       const car = cars.find((data)=>data.id === Number(id))
     if(!car) return res.status(404).send("car id is not found");
      return res.send(car);
     });


router.post('/',(req,res)=>{
    //  const schema = Joi.object({
    //     name :Joi.string().min(3).max(15),
    // });
    // const result = schema.validate(req.body);
    // //console.log("result....",result);
    // if(result.error)return res.status(400).send(result.error.details[0].message);
    const {error} = validate(req.body);
    const { name } = req.body;
    //if(!name) return res.status(400).send("name parameter is required");
    if(error)
    return res.status(400).send(error.details[0].message);
   
        const newCar = {
        id:cars.length + 1,
        name,
    }
    cars.push(newCar);
    return res.status(201).send(newCar);
    console.log("body.....",req.body);
 });
 router.put('/:id',(req,res)=>{
    // const schema = Joi.object({
    //     name :Joi.string().min(3).max(15),
    // });
    // const result = schema.validate(req.body);
    // //console.log("result....",result);
    // if(result.error)return res.status(400).send(result.error.details[0].message);
    // const result = validate(req.body);
    const {error} = validate(req.body);
    const { name } = req.body;
    // if(result.error)
    if(error)
    return res.status(400).send(error.details[0].message);
   
    //if(!name) return res.status(404).send("name parameter is required");

    const {id }=req.params;
    const car = cars.find((data)=>data.id === Number(id));
    if(!car) return res.status(404).send("car data not found");
    car.name = name;
    return res.status(200).send(car);
 })
 router.delete('/:id',(req,res)=>{
    const { id } = req.params;
    const car = cars.find((data)=>data.id===Number(id));
    if(!car) return res.status(404).send("car data not found")
    const index = cars.indexOf(car);
    cars.splice(index,1);
    return res.status(200).send(car);
 });
 //validate function
 //passed below function to helper/validate.js file
//  function validate(carBody){
//     const schema = Joi.object({
//         name :Joi.string().min(3).max(15).required(),
//         });
//  return schema.validate(carBody);
//}


module.exports = router;