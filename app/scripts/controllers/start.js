'use strict';

/**
 * @ngdoc function
 * @name blendleSlidesApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the blendleSlidesApp
 */
angular.module('blendleSlidesApp')
	.controller
	(
		'StartCtrl',
		[
			'$scope',
			'$location',
			'$localStorage',
			'$sessionStorage',
			function($scope,$location,$localStorage,$sessionStorage)
			{
				// Get GUID from URI, it should be in the 2th position
				$scope.guid = $location.path().split('/')[2];
				
				// Check if GUID is valid (yes.. in real this would be checked against a DB)
				if($scope.guid.length != 16)
				{
					alert('You made a big mistake!');
					return $location.path('/');
				}
				
				// Load helpers
				$scope.helpers = blendleApp.helpers;
				
				// Load storage engine
				$scope.$storage = $localStorage;
				
				// Others
				$scope.url = $location.absUrl();
				$scope.name = 'My presentation'; // Get from LocalStorage or DB
				$scope.preview = null; // Get from LocalStorage or DB
				$scope.description = ' Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. '; // Get from LocalStorage or DB
			}
		]
	);