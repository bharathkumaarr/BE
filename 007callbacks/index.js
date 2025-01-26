const fs = require('fs');



function person(name, callbackFn){
    console.log(`hello, ${name}`)
    callbackFn()
}

function address(){
    console.log('address: bangalore, India')
}

person('bharathkumar', address)

fs.readFile('input.txt', 'utf8', (err, data)=> {
    if (err){
        console.error('error reading file', err)
        return
    }
    console.log(data);
})