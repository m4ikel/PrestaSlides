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
		'SlidesCtrl',
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
				
				// Load helpers
				$scope.helpers = blendleApp.helpers;
				
				// Load storage engine
				$scope.$storage = $localStorage;
				
				// Check if GUID is valid (yes.. in real this would be checked against a DB)
				if($scope.guid.length != 16)
				{
					alert('You made a big mistake!');
					return $location.path('/');
				}
				
				if($scope.$storage[$scope.guid] == undefined)
				{
					$scope.$storage[$scope.guid] = [];
				}
				
				// Others
				$scope.url = $location.absUrl();
				$scope.slide = parseInt($location.path().split('/')[4]);
				
				if($scope.slide > -1 && $scope.$storage[$scope.guid][$scope.slide] != undefined)
				{
					$scope.color = $scope.$storage[$scope.guid][$scope.slide].color;
					$scope.html = $scope.$storage[$scope.guid][$scope.slide].html;
				}
				
				// http://stackoverflow.com/questions/21503588/angularjs-bind-html-string-with-custom-style
				$scope.trustAsHtml = function(string)
				{
					return $sce.trustAsHtml(string);
				};
				
				if($scope.slide > 0)
				{
					$scope.prevSlide = $scope.slide - 1;
				}
				else
				{
					$scope.prevSlide = $scope.slide;
				}
				
				$scope.nextSlide = $scope.slide + 1;
				
				// Detect keystrokes for moving between slides
				$rootScope.keyChange = function(event)
				{
					if(event.key == 'ArrowLeft')
					{
						$location.path('/project/'+$scope.guid+'/slides/'+$scope.prevSlide);
					}
					else if(event.key == 'ArrowRight')
					{
						$location.path('/project/'+$scope.guid+'/slides/'+$scope.nextSlide);
					}
				}
				
				// Fullscreen mode events
				$rootScope.goFullscreen = function()
				{
					if(Fullscreen.isEnabled())
					{
						Fullscreen.cancel();
					}
					else
					{
						Fullscreen.all();
					}
				}
			}
		]
	);