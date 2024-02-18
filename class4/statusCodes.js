//http methods
//GET
//POST
//PUT
//DELETE
//PATCH

//for react API
const axios = require('axios');
async function createOrder(){
const result = await axios.post('http://localhost:5000/createOrder',{
       
    "customerName":"shashikala",
    "product":"iphone",
    "price": 500,
     "quantity":2
});
console.log(result);

}
createOrder();





