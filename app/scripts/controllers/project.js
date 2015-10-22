'use strict';

/**
 * @ngdoc function
 * @name blendleSlidesApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the blendleSlidesApp
 */
angular.module('blendleSlidesApp')
	.controller
	(
		'ProjectCtrl', 
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
				$scope.guid = $scope.helpers.generateGUID(); // Generate a unique GUID for the user
			}
		]
	);
