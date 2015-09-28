'use strict'
var _ = require('lodash');
exports.get = function (homes) {
	var filteredHomes = _.unique(_.pluck(homes, 'type'));
	return filteredHomes;
};
