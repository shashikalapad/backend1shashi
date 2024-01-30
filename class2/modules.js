//path module
// const path  = require("path");
// console.log(path);
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

//os module
//const os = require("os");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.networkInterfaces());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.machine());

// file system (fs) module
//const fs = require('fs');
//synchronous for dir
// const files =fs.readdirSync('./');
// console.log(files);

//asynch
// fs.readdir('./',(err,files)=>{
//     if(err) console.log(err);
//     else console.log("files",files);
// })
//sync method for file to read
// const filedata =fs.readFileSync("./class2/demo.txt","utf-8");
// console.log(filedata);

//asynch
// const file= fs.readFile('./class2/demo.txt',"utf-8",(err,file)=>{
// if(err) console.log(err);
// else console.log(file);
// })

//write operation
// const person = {
//     name:"terminator",
//     age:2014,

// }
//synch
// const filedata = fs.writeFileSync("person.json",JSON.stringify(person));
// console.log("file saved");
//async
// fs.writeFile("person.json",JSON.stringify(person),(err,data)=>{
//     if(err) console.log(err);
//     else console.log("file saved");
// });
//write operation for text file
//sync method
// const textdata = "Today is friday";
// const filedata = fs.writeFileSync("friday.text",textdata);
// console.log("file saved");

//async 
// const textdata = "Today is friday";
// fs.writeFile("friday.text",textdata,(err)=>{
//     if(err) console.log(err);
//     else console.log("file saved");
// });

//event module
const EventEmitter = require('events');
const emitter = new EventEmitter();
//listening event
// emitter.on("message recieved",()=>{
//     console.log("message from client is recieved");
// })

//raise the event
// emitter.emit('message recieved');
// emitter.emit('message recieved');
// emitter.emit("db connect");
// 
//http module
//listener function
const http = require('http');
const server = http.createServer((req,res)=>{
   if(req.url === "/") {
    res.write("welcome to node class");
     res.end();
   }
   if(req.url === "/names"){
    res.write(JSON.stringify(["virat","sachin","dhoni"]))
    res.end();
   }
   if(req.url === "/users"){
    let users = {
        name:"shashi",
        age:"34",
        place:"karnaataka",
    }
    res.write(JSON.stringify(users))
    res.end();
   }
})
//listener

server.on('connection',()=>{
    console.log("new connection happened");
});
//trigger
server.listen(3000);
console.log("Server listening in port 3000...");







 
