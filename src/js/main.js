;(function() {
  angular.module('StatTracker', ['ngRoute'],
    function($routeProvider){
     $routeProvider
        .when('/', {
          redirectTo: '/login',
       })
       .when('/login',{
         templateUrl: 'partials/user.html',
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
      })//END of "NewActivityController"

      .controller('ActivityController', function($scope, $http){
        $http.get("https://lit-hollows-3591.herokuapp.com/api/activities/1/?format=json")
        //console.log(arguments)
        .then(function(response){


          $scope.activity = response.data;
          console.log(response.data.logs[0].activity_count);

        })
      })

      // .controller('MainController', function($scope, $route, $routeParams, $location){
      //   $scope.$route = $route;
      //   $scope.$location = $location;
      //   $scope.$routeParams = $routeParams;
      // })
      // .controller('activityController', function($scope, $routeParams, $http, $rootScope){
      //   var id = $routeParams.activity.id -1;
      //   $http.get("https://lit-hollows-3591.herokuapp.com/api/activities/1/logs/?format=json")
      //   .then(function(arguments){
      //     $rootScope.activity = arguments.data[id];
      //     $rootScope.activity_date = arguments.data[id].date;
      //     $rootScope.activity_count = arguments.data[id].count;
      //   })
      //   .config(function($routeProvider, $locationProvider){
      //     $routeProvider
      //     .when('/activities',{
      //       templateUrl:"partials/activity.html",
      //       //controller:'activityController'
      //     })
      //   })
      //})
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
