'use strict'
var co = require('co');
var Firebase = require('Firebase');
var constants = require('./../constants');
exports.all = function (url) {
	return new Promise(function (resolve, reject) {
		try {
			var ref = new Firebase(url);
			ref.once('value', function (snap) {
				var results = snap.val();
				resolve(results);
			}, function (error) {
				reject(error);
			});
		} catch (err) {
			reject(err);
		}
	});
};

exports.save = function (url, saveObj) {
	return new Promise(function (resolve, reject) {
		try {
			var ref = new Firebase(url);
			ref.set(saveObj, function (err) {
				if (err) {
					reject(err)
				}
				resolve(true);
			})
		} catch (err) {
			reject(err);
		}
	});
};