const express = require('express');
const router = express.Router();
const {validate} = require('../helper/validate');

const bikes = [
    { id:1,name:"tvs"},
    { id:2,name:"suziki"},
    { id:3,name:"honda"},
];
router.get('/',(req,res)=>{
    return res.send(bikes);
});

router.get('/:id',(req,res)=>{
    const { id } = req.params;
    const bike = bike.find((data)=>data.id === Number(id));
    if(!bike) return res.status(404).send("car id is not found");
     return res.send(bike);
});

router.post('/',(req,res)=>{
    const {error} = validate(req.body);
    const { name } = req.body;
  //  const { name } = req.body;
   // if(!name) return res.status(404).send("name parameter required");
   if(error)
    return res.status(400).send(error.details[0].message);
  const newBike ={
    id:bikes.length + 1,
    name,
  }
  bikes.push(newBike)
  return res.status(201).send(newBike);
});

router.put('/:id',(req,res)=>{
    const {error} = validate(req.body);
    const { name } = req.body;
    if(error)
    return res.status(400).send(error.details[0].message);

    // const { name} =req.body;
    // if(!name) return res.status(404).send("name parameter is required");
    
    const { id } = req.params;
    const bike = bikes.find((data)=>data.id === Number(id));
    if(!bike) return res.status(404).send("bike data is not found");
    bike.name = name;
    return res.status(200).send(bike);
});

router.delete('/:id',(req,res)=>{
    const {id} = req.params;
    const bike = bikes.find((data)=>data.id === Number(id));
    if(!bike) return res.status(404).send("bike data not found");
    const index = bikes.indexOf(bike);
    bikes.splice(index,1);
    return res.status(200).send(bike);

});

module.exports = router;
