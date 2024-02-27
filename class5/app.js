const express = require('express');
const app = express();
app.use(express.json());

// app.listen(5000,() => console.log("Server is running on 5000...."));
//Cannot GET / ---> on UI

// app.get('/shashi',(req,res)=>{
//     return res.send('shashi page');
// })
// shashi page ---> on UI
///express can create CURD operation.



app.get('/',(req,res)=> {
    return res.send("welcome to maruti cars");
});
// initialize the data
const cars = [
    {id:1,name:"mahindra"},
    {id:2,name:"ferrari"},
    {id:3,name:"honda"},
];
// const bikes = [
//     {id:1,name:"motorbike"},
//     {id:2,name:"sujiki"},
//     {id:3,name:"tvs"},
// ];




app.get('/cars',(req,res)=>{
    return res.send(cars);
});


//static
// app.get('/cars/1',(req,res)=>{
//     return res.send(cars[0]);
// });
//more cars use dynamic
// app.get("/cars/:id",(req,res)=>{
//     console.log('request.....',req);
// });
//check the server and then see the terminal params: id: '1'
// app.get("/cars/:id",(req,res)=>{
//    const params = req.params;
//    console.log(params);
// });
//check the server and then see the terminal params: id: '1'
//destructuring above
// app.get("/cars/:id",(req,res)=>{
//    const { id } = req.params;
//    console.log(id);
// });
//to get name of perticular car
// app.get("/cars/:id",(req,res)=>{
//     const { id } = req.params;
//    const car = cars.filter((data)=>data.id ===Number(id))
//    console.log("cars...",car);
//    return res.status(200).send(cars);
//  });
 //getting name of car
//  app.get("/cars/:id",(req,res)=>{
//     const { id } = req.params;
//    const car = cars.filter((data)=>data.id === Number(id))
//  if(car.length >= 1) return res.send(car);
//  res.send("No car available");
//  });
 //return is important
 //it should return object not array so we should use find method
//  app.get("/cars/:id",(req,res)=>{
//     const { id } = req.params;
//    const car = cars.find((data)=>data.id === Number(id))
//  return res.send(car);
//  });
//using postman
app.get("/cars/:id",(req,res)=>{
        const { id } = req.params;
       const car = cars.find((data)=>data.id === Number(id))
     if(!car) return res.status(404).send("car id is not found");
      return res.send(car);
     });

 //create data
//  app.post('/cars',(req,res)=>{
//     console.log("body.....",req.body);
//  })
 //use json body from express
//  app.post('/cars',(req,res)=>{
//     const { name } = req.body;
//     const newCar = {
//         id:cars.length + 1,
//         name,
//     }
//     cars.push(newCar);
//     return res.status(201).send(newCar);
//     console.log("body.....",req.body);
//  })
//if not sending data



app.post('/cars',(req,res)=>{
    const { name } = req.body;
    if(!name) return res.status(400).send("name parameter is required");
    const newCar = {
        id:cars.length + 1,
        name,
    }
    cars.push(newCar);
    return res.status(201).send(newCar);
    //console.log("body.....",req.body);
 });


 app.put('/cars/:id',(req,res)=>{
    const{name }=req.body;
    if(!name) return res.status(404).send("name parameter is required");

    const {id }=req.params;
    const car = cars.find((data)=>data.id === Number(id));
    if(!car) return res.status(404).send("car data not found");
    car.name = name;
    return res.status(200).send(car);
 })
 app.delete('/cars/:id',(req,res)=>{
    const { id } = req.params;
    const car = cars.find((data)=>data.id===Number(id));
    if(!car) return res.status(404).send("car data not found")
    const index = cars.indexOf(car);
    cars.splice(index,1);
    return res.status(200).send(car);
 })






 
 //to check some data from API on UI
 app.get("/check/:name/:age",(req,res)=>{
  return res.send(req.params);
 });



app.listen(5000,() => console.log("Server is running on 5000...."));