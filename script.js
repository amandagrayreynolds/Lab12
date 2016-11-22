

(function() {
var app = angular.module("AmandaApp", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/cat", {
        templateUrl: "views/cat.html"
    });
    $routeProvider.when("/dog", {
        templateUrl: "views/dog.html",
        
    });
    $routeProvider.when("/sloth", {
        templateUrl: "views/sloth.html",
        
    });
    $routeProvider.when("/pig", {
        templateUrl: "views/pig.html",
        
    });
    $routeProvider.otherwise({
        templateUrl: "views/fail.html",
    });
});

})();