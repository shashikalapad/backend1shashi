// const logged =require('./logged');
// console.log(logged(10,20));
// console.log(logged.add(10,20));


//named imports
const {add,sub} =require('./logged');
//console.log("logged",add(10,20));
console.log("add",add(3,4));
console.log("sub",sub(10,4));

