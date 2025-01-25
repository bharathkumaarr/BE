function add(a,b){
    return a+b
}

function subs(a,b){
    return a-b
}

function div(a,b){
    if (b===0) {
        throw new Error('trying to divide by zero')
    }
    return a/b
}

module.exports = {
    add, subs, div
}

