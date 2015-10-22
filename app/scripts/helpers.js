'use strict';

/**
 * @ngdoc overview
 * @name blendleSlidesApp
 * @description
 * # blendleSlidesApp helper
 *
 * Helpers of the application.
 */

var blendleApp = blendleApp || {};

blendleApp.helpers =
{
	isNotString: function(str)
	{
		return (typeof str !== "string");
	},
	generateGUID: function(str)
	{
		function s4()
		{
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + s4() + s4();
	}
};