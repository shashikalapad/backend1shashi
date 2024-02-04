const express = require ("express");
const cars = require('./routes/cars');
const app1 = express();

// const bikes = [
//     {id:1,name:"motorbike"},
//     {id:2,name:"sujiki"},
//     {id:3,name:"tvs"},
// ];

app1.use(express.json());
app1.get('/',(req,res)=> {
    return res.send("welcome to maruti cars");
});
app1.use('/cars',cars);



app1.listen(5000,() => console.log("Server is running on 5000...."));