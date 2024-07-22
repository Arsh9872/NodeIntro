// how to import pre built modules
const os = require("os");
const path = require("path");


const {add , multiply} = require("./math");  // importing modules from different file
const { log } = require("console");

// global variables

console.log(__dirname);

console.log(__filename);


// commonjs module 
// every file is a module

console.log(multiply(2,3)); 
console.log(add(2,3)); 

//os modules
console.log(os.arch());
console.log(os.type());
console.log(os.cpus());
console.log(os.machine());
console.log(os.totalmem());
console.log(os.freemem());
console.log(path.join(__dirname,"apps","myapp"));
console.log(path.parse(__filename));
