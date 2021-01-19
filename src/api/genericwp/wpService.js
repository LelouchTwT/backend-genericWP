const wp = require("./genericWP");
console.log(wp)

wp.methods(['get', 'post', 'put', 'delete']);
wp.updateOptions({ new: true, runValidators: true });

module.exports = wp;