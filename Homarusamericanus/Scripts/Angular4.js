//@ sourceURL=Angular4.js
//angular.module('firstModule', [])


//Create Routes
angular.module('firstModule', []).config(function ($routeProvider) {
    $routeProvider.
        when('/Angular4', { controller: customersController, templateUrl: 'temp1.html' }).
        when("/second", { controller: "SimpleController", templateUrl: "temp2.html" }).
        otherwise({ redirectTo: "/first" });
});