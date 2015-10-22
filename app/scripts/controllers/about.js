'use strict';

/**
 * @ngdoc function
 * @name blendleSlidesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blendleSlidesApp
 */
angular.module('blendleSlidesApp')
	.controller
	(
		'AboutCtrl',
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
				
				// Others
				$scope.url = $location.absUrl();
			}
		]
	);
