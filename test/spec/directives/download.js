"use strict";

angular.module('blendleSlidesApp')
.directive('myDownload', function ($compile) {
    return {
        restrict:'E',
        scope:{ getUrlData:'&getData'},
        link:function (scope, elm, attrs) {
            var url = URL.createObjectURL(scope.getUrlData());
            elm.append($compile(
                '<a class="btn btn-lg btn-default" download="presentation.json"' +
                    'href="' + url + '">' +
                    'Download' +
                    '</a>'
            )(scope));
        }
    };
});