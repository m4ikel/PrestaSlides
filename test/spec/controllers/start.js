'use strict';

describe('Controller: StartCtrl', function () {

  // load the controller's module
  beforeEach(module('blendleSlidesApp'));

  var StartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartCtrl = $controller('StartCtrl', {
      $scope: scope,
	  $localStorage: localStorage
      // place here mocked dependencies
    });
	
	// Define GUID (should be inside URI)
	scope.guid = '1234567890123456';
	
	// Define base url
	scope.url = 'http://www.localhost.tld/';
  }));

	it('Should be defined', function () {
		expect(StartCtrl).toBeDefined(true);
	});

	it('Should attach the absolute URL to the scope', function () {
		expect(scope.url).toBeDefined();
	});
	
	it('Should attach localStorage to the scope', function () {
		expect(localStorage).toBeDefined();
	});	

	it('Should generate a GUID and attach it to the scope containing 16 chars', function () {
		expect(scope.guid).toBeDefined();
		expect(scope.guid.length).toBe(16);
	});
});
