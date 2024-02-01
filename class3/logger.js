//const {log} = require("./app");
class log  {
    constructor(name){
        this.name = name;
      
    }
    display(){
        console.log("logging data",this.name);
    }
}
const Log =new log("shashi");
Log.display();       
module.exports = {
    log,
}