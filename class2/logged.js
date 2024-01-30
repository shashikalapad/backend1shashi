function add(n1,n2){
    return n1 + n2;
}

//default
//module.exports = add;

//named export
//module.exports.add =add;
function sub(n1,n2){
    return n1 - n2;
}
//best exports
module.exports ={
    add,
    sub,
}
 //console.log("exports",exports);
console.log("exports",module);
