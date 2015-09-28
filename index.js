'use strict'
var propType = require('./util/propertyType');
propType.extract().then(function () {
	console.log('-- Task is done --');
	process.exit(0);
}).catch(function (err) {
	console.error(err.stack);
	process.exit(1);
});
