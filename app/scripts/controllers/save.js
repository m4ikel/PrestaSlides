'use strict';

/**
 * @ngdoc function
 * @name blendleSlidesApp.controller:SlidesCtrl
 * @description
 * #SlidesCtrl
 * Controller of the blendleSlidesApp
 */
angular.module('blendleSlidesApp')
	.controller
	(
		'SaveCtrl',
		[
			'$rootScope',
			'$scope',
			'$location',
			'$localStorage',
			'$sessionStorage',
			'$sce',
			function($rootScope,$scope,$location,$localStorage,$sessionStorage,$sce)
			{
				// Get GUID from URI, it should be in the 2th position
				$scope.guid = $location.path().split('/')[2];
				
				// Check if GUID is valid (yes.. in real this would be checked against a DB)
				if($scope.guid != undefined && $scope.guid.length == 16)
				{
					// Load helpers
					$scope.helpers = blendleApp.helpers;
					
					// Load storage engine
					$scope.$storage = $localStorage;
					
					if($scope.$storage[$scope.guid] == undefined)
					{
						$scope.$storage[$scope.guid] = [];
					}
					
					// Others
					$scope.url = $location.absUrl();
					$scope.slide = parseInt($location.path().split('/')[4]);
					
					var json = JSON.stringify($scope.$storage[$scope.guid]);
					
					$scope.getBlob = function()
					{
						return new Blob([json], {type: "application/json"});
					}
				}
				else
				{
					alert('You made a big mistake!');
					return $location.path('/');
				}
			}
		]
	);