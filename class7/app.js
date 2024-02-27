const express = require ("express");
const morgan = require("morgan");
const cars = require('./router/cars');//-->router middleware
const bikes = require('./router/bikes');

const app = express();
app.use(express.json());//inbuilt middleware
app.use('/cars',cars);
app.use('/bikes',bikes);

//middleware-->custom middleware
// app.use(function(req,res,next){
//     console.log("calling custom middleware");
//     console.log(`req-->${req} res-->${res}`)
// });
//run req will struck on postmon
// app.use(function(req,res,next){
//     console.log("calling custom middleware");
//     console.log(`req-->${req} res-->${res}`);
//     next();
// });

// app.get('/',(req,res)=> {
//     return res.send("welcome to maruti cars");
// });

//custom middleware-->user creating
// app.use(function authenticate(req,res,next){
//     const {user_id } = req.headers;
//     if(user_id==="123") return res.status(403).send("Invalid user");
//     else next();
// })
// app.use(function(req,res,next){
//     console.log("calling custom middleware");
//     console.log(`req-->${req} res-->${res}`);
//     next();
// });

//morgan middleware
app.use(morgan("dev"));


app.use(express.static("class7/public"));
app.use(express.urlencoded({extended:true}));
//template engins
app.set("view engine","pug");
app.set("views","./class7/views");
//console.log(app);
//static
// app.get('/',(req,res)=> {   
//        return res.render("index",{
//          title:"Newton School",
//          message:"Welcome to Newton School shashikala",
//        });
//    });
   //dynamic
   // app.get('/:name',(req,res)=> {
   //    const {name} = req.params;
   //        return res.render("index",{
   //          title:"Newton School",
   //          message:`Welcome to Newton School ${name}`,
   //        });
   //     });
   
// console.log("environment-->",app.get("env"));
// if(app.get("env")=== "production"){
//    console.log("morgan enabled...");
//    app.use(morgan('dev'));
// }


app.listen(5000,() => console.log("Server is running on 5000...."));