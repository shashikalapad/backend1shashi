const express =  require('express');
const mongoose = require('mongoose')
const user = require('./routes/user');
const auth = require('./routes/auth');


const app = express();
//mongodb connection
mongoose
.connect("mongodb://localhost:27017/playground")
.then(()=>console.log('mongodb is connected'))
.catch((err)=>console.log('Error occured while connecting mongodb',err));

//middleware connection
app.use(express.json());
app.use('/user',user);
app.use('/auth',auth);


//Server connection
app.listen(5000,()=>console.log('Server is connecting on 5000....'));
