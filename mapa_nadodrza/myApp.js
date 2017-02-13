//var myApp = angular.module('myApp', ['ui.bootstrap.demo', 'ngRoute', 'chieffancypants.loadingBar']);
//angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

var myApp = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute', 'chieffancypants.loadingBar']);

myApp.config(function($routeProvider){ 
    
    $routeProvider
    .when('/', {
        templateUrl: 'routes/main_pl.html', 
        controller: 'mapController'    
    })
    .when('/eng', {
        templateUrl: 'routes/main_eng.html',
        controller: 'mapController'
    })
    .when('/de', {
        templateUrl: 'routes/main_de.html',
        controller: 'mapController'
    })
});

myApp.config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  });

myApp.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});
