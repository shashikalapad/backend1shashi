const express = require ("express");
const cars = require('./routes/cars');
const bikes = require('./routes/bikes');

const app = express();
app.use(express.json());

app.get('/',(req,res)=> {
    return res.send("welcome to maruti cars");
});
app.use('/cars',cars);
app.use('/bikes',bikes);




app.listen(5000,() => console.log("Server is running on 5000...."));