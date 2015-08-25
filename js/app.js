var app =  angular.module("myApp",['ngRoute']);
app.config(function($routeProvider) {

  $routeProvider.when('/first', {
    templateUrl: 'template/first.html',
    // controller: 'LoginController'
  });

  $routeProvider.when('/second', {
    templateUrl: 'template/second.html',
    // controller: 'HomeController'
  });

  $routeProvider.when("/third", {
	  templateUrl: 'template/third.html',
	  // controller: 'ViewController'
  });
  $routeProvider.otherwise({ redirectTo: '/' });

});
app.controller('myCtr',function($scope,$http){
  $http.get
})
