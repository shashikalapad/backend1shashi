const express = require('express');
const app = express();
const { log } = require('./logger');

// app.get();
// app.put();
// app.post();
// app.delete();

app.get("/",(req,res)=>{
    res.write("welcome to express");
    res.end();
});
app.get("/students",(req,res)=>{
    res.send(["shashi","sumi","shiva"]);
    res.end();
})
app.listen(3000);
console.log("server is running on 3000...");