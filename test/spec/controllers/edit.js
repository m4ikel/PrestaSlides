'use strict';

describe('Controller: EditCtrl', function () {

  // load the controller's module
  beforeEach(module('blendleSlidesApp'));

  var EditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditCtrl = $controller('EditCtrl', {
		$scope: scope
    });
	
	// Define GUID (should be inside URI)
	scope.guid = '1234567890123456';
  }));
  
  it('Should be defined', function () {
    expect(EditCtrl).toBeDefined(true);
  });

  it('Should attach a GUID to the scope containing 16 chars', function () {
	expect(scope).toBeDefined();
	expect(scope.guid).toBeDefined();
	expect(scope.guid.length).toBe(16);
  });
  
});