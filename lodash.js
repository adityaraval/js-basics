const _ = require('lodash')

let defaults = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
console.log(defaults);

let chunks = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(chunks);
