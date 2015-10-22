'use strict';

/**
 * @ngdoc function
 * @name blendleSlidesApp.controller:EditCtrl
 * @description
 * #EditCtrl
 * Controller of the blendleSlidesApp
 */
angular.module('blendleSlidesApp')
	.controller
	(
		'EditCtrl',
		[
			'$rootScope',
			'$scope',
			'$location',
			'$localStorage',
			'$sessionStorage',
			function($rootScope,$scope,$location,$localStorage,$sessionStorage)
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
				
				$scope.submit = function()
				{
					$scope.$storage[$scope.guid][$scope.slide] =
					{
						color: this.color,
						html: this.html
					};
					
					return $location.path('/project/'+$scope.guid+'/slides/'+$scope.slide);
				}
				
				$scope.tinymceOptions =
				{
					selector: "div.editable",
					inline: true,
					plugins: [
						"advlist autolink lists link image charmap print preview hr anchor pagebreak",
						"searchreplace wordcount visualblocks visualchars code fullscreen",
						"insertdatetime media nonbreaking save table contextmenu directionality",
						"emoticons template paste textcolor colorpicker textpattern"
					],
					toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
					toolbar2: "print preview media | forecolor backcolor emoticons",
					skin: 'lightgray',
					theme : 'modern'
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