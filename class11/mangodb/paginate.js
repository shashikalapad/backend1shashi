const  express = require("express");

const app = express();
app.use(express.json());




// const users = [];
// for(let id=1;id<=200;id++){
//     users.push({
//         id,
//         name:`user-${id}`,
//     })

// }
//console.log(users);

//if any data removed inbetween then logic is
const users = [];
for(let id=1;id<=200;id++){
    if(id%3===0)  continue;
    users.push({
        id,
        name:`user-${id}`,
    })

}
console.log(users);
//from froend end-->limit,page
app.post('/users',(req,res)=>{
    const {limit,page} = req.body;
    const start = (page-1) * limit;
    const end = page * limit;
    // const userData = users.filter((user) => user.id>start && user.id<=end )
     //console.log(userData);

     //if any data removed
     const userData = users.filter((user,index) => index+1>start && index<end )
     const pagination = {
        totalPages:Math.ceil(users.length / limit),
        currentPage:page,
        totalUsers:users.length,
     }

     return res.status(200).json({
        data:userData,
         pagination,

     });

});
app.listen(5000,()=>console.log("Server is running on 5000..."));

