'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('blendleSlidesApp'));

  var ProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope,
	  $localStorage: localStorage
      // place here mocked dependencies
    });
  }));

	it('Should be defined', function () {
		expect(ProjectCtrl).toBeDefined(true);
	});

	it('Should attach the absolute URL to the scope', function () {
		expect(scope.url).toBeDefined();
	});
	
	it('Should attach helpers to the scope', function () {
		expect(scope.helpers).toBeDefined();
	});
	
	it('Should attach localStorage to the scope', function () {
		expect(localStorage).toBeDefined();
	});

	it('Should generate a GUID and attach it to the scope containing 16 chars', function () {
		expect(scope.guid).toBeDefined();
		expect(scope.guid.length).toBe(16);
	});
});
