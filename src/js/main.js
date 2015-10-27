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
       .when('/login',{ //CHANGE THIS SO IT REDIRECTS AT THE RIGHT TIME (TO LOGIN)
         templateUrl: 'partials/user.html',
       })
      })
      .run(function($http, $rootScope) {
        $http.get('https://lit-hollows-3591.herokuapp.com/api/activities/?format=json')
        // $http.get('/src/fake.json')
          .then(function(response) {
            $rootScope.activities = response.data;
        })

}) //END module





})(); //END OF IIFE
