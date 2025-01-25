const lodash = require('lodash');

const names = ['bharath', 'newName', 'newName1'];

const capital = lodash.map(names, lodash.capitalize);

console.log(capital);