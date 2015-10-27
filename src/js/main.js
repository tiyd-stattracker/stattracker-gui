;(function() {
  angular.module('StatTracker', ['ngRoute'],
  function($routeProvider){
     $routeProvider
        .when('/', {
          redirectTo: '/login',
       })
       .when('/login',{
         templateUrl: 'partials/login.html',
       })

}) //END module

})(); //END OF IIFE
