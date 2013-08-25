define(['require', 'libs/requirejs/domReady'], function(require, domReady) {
	domReady(function() {
		// Load any app-specific modules
		// with a relative require call,
		// like:
		// var util = require('./util');
		console.log('App started (dom ready)');
		alert('dom ready!')
	});
});