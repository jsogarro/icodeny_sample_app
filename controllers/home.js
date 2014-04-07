'use strict'

exports.index = function(req, res) {
	res.render('home', {title: "My Home Page"});
}