console.log('node module wrapper example')


console.log(__filename, 'file-name in exp')
console.log(__dirname, 'directory-name in exp')

module.exports.greet=function(name){
    console.log(`hello ${name}`);
}