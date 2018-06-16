(function(){
  angular.module('app',['ngRoute'])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<home-page></home-page>'
        })
        .when('/app', {
          template: '<question></question>'
        })
        .when('/purses', {
          template: '<purse-results></purse-results>'
        });
    });
})();
