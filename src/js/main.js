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
       .when('/activity/:id',{
         templateUrl: 'partials/activity.html',
         controller: function($routeParams, $http, $scope){
         var id = $routeParams.id
           $http.get("https://lit-hollows-3591.herokuapp.com/api/activities/"+ id +"/?format=json")
           .then(function(response){
             $scope.activity = response.data;
             console.log('here')
             console.log(response.data.logs[0].activity_id);
           })
         }
       })

       //.controller('ActivityController', function($scope, $http){

  }) //END $routeProvider    //END module
      .controller('ListOfActivitesController', function($scope, $http) {
        $http.get('https://lit-hollows-3591.herokuapp.com/api/activities/?format=json')
          .then(function(response) {
            $scope.activities = response.data;
            console.log(response.data);
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

      // .controller('ActivityController', function($scope, $http){
      //   $http.get("https://lit-hollows-3591.herokuapp.com/api/activities/?format=json")
      //   .then(function(response){
      //     $scope.activity = response.data;
      //     console.log(response.data.logs[0].activity_id);
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
