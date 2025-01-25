//module.exports
//require


const firstModule = require('./firstmodule');

console.log(firstModule.add(10,20));


try {
    // console.log('trying to divide by zero');
    let result = firstModule.div(10,20)
    console.log(result, 'result');
} catch(error) {
    console.log('caught an error', error.message)
}




//moduleWrapper


// (
//     function(exports, require, module, __filename, __dirname){
//         //module code
//     }
// )
