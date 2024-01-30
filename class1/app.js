console.log(global);
console.log(global.name="shashi");
//output shashi
//IIRE
(function display(name){
    console.log("shashi fn",name);
})("good");

//  o/p  shashi fn good
console.log(module);
// it shows path