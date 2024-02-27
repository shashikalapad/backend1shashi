const express = require("express");
const router = express.Router();

const log = require("debug")('app:startup');
const {readCar,createCar,updateCar,deleteCar} = require("../controllers/carController");

const cars = [
    {id:1,name:"mahindra"},
    {id:2,name:"ferrari"},
    {id:3,name:"honda"},
];

router.get('/',(req,res)=>{
    log("sending cars",cars);
    return res.send(cars);
});




     router.get("/:id",readCar)
     router.post('/',createCar);
     router.put('/:id',updateCar);
     router.delete('/:id',deleteCar);




module.exports = router;