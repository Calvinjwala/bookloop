'use strict';


angular.module('bookloopApp')
  .controller('UsersCtrl', ['$scope', 'Users', '$http', 'lodash', function ($scope, Users, $http, lodash) {

    $scope.user = new Users();
    $scope.users = Users.query();

    $scope.createUser = function(newUser){
      $scope.user = newUser;
      // console.log($scope.user);
      Users.save(newUser);
      $scope.users.push($scope.user);
      $scope.user = new Users();
    };

    // $scope.save = function(){
    //   $scope.user.$save();
    //   console.log($scope.user);
    //   $scope.users.push($scope.user);
    //   $scope.user = new Users();
    // };


    $scope.deleteUser = function(user){
      $scope.id = user.id;
      console.log(user);
      Users.delete(user);
      // console.log(user);

      lodash.remove($scope.users, user);
    };


    $scope.loginUser = function(user){
      console.log(user);
      $http.post("http://localhost:3000/api/login", {
        email: user.email,
        password: user.password
      }).then(function(result) {
        console.log(result);
        // email = {
        //   // accessToken: result.data.access_token,
        //   userName: result.data.userName
        // };
      // };
      });
    };

  }]);

