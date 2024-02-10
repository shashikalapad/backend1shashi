const express = require ("express");
const cars = require('./routes/cars');
const bikes = require('./routes/bikes');
const app1 = express();


app1.use(express.json());

app1.get('/',(req,res)=> {
    return res.send("welcome to maruti cars");
});
app1.use('/cars',cars);
app1.use("/bikes",bikes);



app1.listen(5000,() => console.log("Server is running on 5000...."));