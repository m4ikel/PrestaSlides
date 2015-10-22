'use strict';

/**
 * @ngdoc overview
 * @name blendleSlidesApp
 * @description
 * # blendleSlidesApp
 *
 * Main module of the application.
 */
 
angular
  .module('blendleSlidesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'mgcrea.ngStrap',
	'monospaced.qrcode',
	'angularScreenfull',
	'ngStorage',
	'ui.tinymce',
	'colorpicker.module'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	  .when('/project', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl',
        controllerAs: 'project'
      })
	  .when('/project/:guid', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl',
        controllerAs: 'start'
      })
	  .when('/project/:guid/slides/:slide', {
        templateUrl: 'views/slides.html',
        controller: 'SlidesCtrl',
        controllerAs: 'slides'
      })
	  .when('/project/:guid/slides/:slide/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
	  .when('/project/:guid/save', {
        templateUrl: 'views/save.html',
        controller: 'SaveCtrl',
        controllerAs: 'save'
      })
	  .when('/404', {
        templateUrl: 'views/error404.html',
        controller: 'error404Ctrl',
        controllerAs: 'error404'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
