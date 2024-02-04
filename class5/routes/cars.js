const express = require("express");
const router = express.Router();
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
    const { name } = req.body;
    if(!name) return res.status(400).send("name parameter is required");
    const newCar = {
        id:cars.length + 1,
        name,
    }
    cars.push(newCar);
    return res.status(201).send(newCar);
    console.log("body.....",req.body);
 });
 router.put('/:id',(req,res)=>{
    const{name }=req.body;
    if(!name) return res.status(404).send("name parameter is required");

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

module.exports = router;
