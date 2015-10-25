'use strict';

describe('Controller: error404Ctrl', function () {

  // load the controller's module
  beforeEach(module('blendleSlidesApp'));

  var error404Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    error404Ctrl = $controller('error404Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Should be defined', function () {
    expect(error404Ctrl).toBeDefined(true);
  });
});
