'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('blendleSlidesApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Should be defined', function () {
    expect(AboutCtrl).toBeDefined(true);
  });
});
