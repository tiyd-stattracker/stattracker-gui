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
       .when('/activity',{
         templateUrl: 'partials/activity.html',
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
      });//END of "NewActivityController"

})(); //END OF IIFE angular

;(function(){
  $("a.log-info").on('click', function(event){
    event.preventDefault();
    console.log(this.hash);
    $(this.hash).removeClass("active").siblings().addClass("active")
  });
  $("a.update-info").on('click', function(event){
    event.preventDefault();
    console.log(this.hash);
    $(this.hash).removeClass("active").siblings().addClass("active")
  });

})(); //END OF IIFE JS
