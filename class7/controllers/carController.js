
const {validate} = require('../helper/validate');

const cars = [
    {id:1,name:"mahindra"},
    {id:2,name:"ferrari"},
    {id:3,name:"honda"},
];
function readCar(req,res){
    const { id } = req.params;
   const car = cars.find((data)=>data.id === Number(id))
 if(!car) return res.status(404).send("car id is not found");
 log("sending cars with id",id);
  return res.send(car);
 }


function  createCar(req,res) {
    const {error} = validate(req.body);
    const { name } = req.body;   
    if(error)
    return res.status(400).send(error.details[0].message);   
        const newCar = {
        id:cars.length + 1,
        name,
    }
    cars.push(newCar);
    return res.status(201).send(newCar);
    //console.log("body.....",req.body);
}
function updateCar(req,res){   
        const {error} = validate(req.body);
        const { name } = req.body; 
        if(error)
        return res.status(400).send(error.details[0].message);  
        const {id }=req.params;
        const car = cars.find((data)=>data.id === Number(id));
        if(!car) return res.status(404).send("car data not found");
        car.name = name;
        return res.status(200).send(car);
     }
    
function deleteCar(req,res){
    const { id } = req.params;
    const car = cars.find((data)=>data.id===Number(id));
    if(!car) return res.status(404).send("car data not found")
    const index = cars.indexOf(car);
    cars.splice(index,1);
    return res.status(200).send(car);
}


module.exports = {
    readCar,
    createCar,
    updateCar,
    deleteCar,  
   
}