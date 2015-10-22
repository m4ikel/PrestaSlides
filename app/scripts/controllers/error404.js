'use strict';

/**
 * @ngdoc function
 * @name blendleSlidesApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the blendleSlidesApp
 */
angular.module('blendleSlidesApp')
	.controller
	(
		'error404Ctrl', 
		[
			'$scope',
			'$location',
			'$localStorage',
			'$sessionStorage',
			function($scope,$location,$localStorage,$sessionStorage)
			{
				// Load helpers
				$scope.helpers = blendleApp.helpers;
				
				// Load storage engine
				$scope.$storage = $localStorage;
			}
		]
	);
