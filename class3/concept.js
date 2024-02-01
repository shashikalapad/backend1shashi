const { error } = require('console');
const crypto =require('crypto');

// //sync method
// const start = Date.now();
// //pbkdf-->password based key derivation function

//console.log(crypto.pbkdf2Sync("password","salt",200,512,"sha512"));
//sha-->secured hashing algo
// crypto.pbkdf2Sync("password","salt",200,512,"sha512");
// console.log(Date.now()-start);

//async method
const start = Date.now();
// const os = require('os');
// console.log(os.cpus().length);
//console.log(process.env);
process.env.UV_THREADPOOL_SIZE =5;
// const MAX_CALLS =2;
// for(let i=0;i<MAX_CALLS;i++){
// crypto.pbkdf2("password","salt",10000,512,"sha512",()=>{
// console.log(`Iteration-${i+1}`,Date.now()-start);
// });
// }
const https = require('https');
const MAX_CALLS =2;
for(let i=0;i<MAX_CALLS;i++){
    https.request('https://www.google.com',(res)=>{
        res.on("data",()=>{
            console.log("get the data");
        });
        res.on("error",()=>{
            console.log(error);
        });
        res.on("end",()=>{
            console.log(`Iteration-${i+1}`,Date.now()-start);
        })
    })
    .end();
}


