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
       .when('/user',{ //CHANGE THIS SO IT REDIRECTS AT THE RIGHT TIME (TO LOGIN)
         templateUrl: 'partials/user.html',
       })
  }) //END $routeProvider    //END module
      .controller('ListOfActivitesController', function($scope, $http) {
        $http.get('https://lit-hollows-3591.herokuapp.com/api/activities/?format=json')
          .then(function(response) {
            $scope.activities = response.data;
        })
      }) //END of 'ListOfActivitesController'
      .controller("NewActivityController", function($scope, $http) {
        $scope.activity = {
          activity_name: '',
          start_date: ''
        }
        $scope.submit= function() {
          $http.post('https://lit-hollows-3591.herokuapp.com/api/activities/?format=json', $scope.activity);
        };
        $scope.activity = {
          activity_name: '',
          start_date: ''
        };
      })//END of "NewActivityController"







































//START SIGN UP & LOG IN ANGULAR

  .controller("SignupController", function($scope, $http){ //CONTROLLER FOR SIGNUP
    $scope.user = {
      username: '',
      password: ''
    }
    $scope.submit = function() {
      $http.post('https://lit-hollows-3591.herokuapp.com/api/users/?format=json', $scope.users)
        $scope.users = {};

    };
  });//CONTROLLER FOR SIGNUP








})(); //END OF IIFE
