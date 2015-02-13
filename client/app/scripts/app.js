'use strict';

/* global app:true */
/* exported app */
/**
 * @ngdoc overview
 * @name bookloopApp
 * @description
 * # bookloopApp
 *
 * Main module of the application.
 */

var app = angular.module('bookloopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngLodash'
  ]);

 app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'UsersCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


app.provider('Books', function(){
  this.$get = ['$resource', function($resource){
    var Book = {};
    Book = $resource('/api/books', null, {
      update: {
        method: 'POST',
        url: '/api/books',
        params: {book: '@book'},
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      },
      delete: {
        method: 'DELETE',
        url: '/api/books/:id.json',
        id: '@book.id',
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }
    });
    return Book;

  }];
});

app.provider('Users', function(){
  this.$get = ['$resource', function($resource){
    var User = $resource('/api/users', null, {
      signup: {
        method: 'POST',
        url: '/api/users',
        params: {user: '@user'},
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      },
      login: {
        method: 'POST',
        url: '/api/users',
        params: {user: '@user'},
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      },
      delete: {
        method: 'DELETE',
        id: '@user.id',
        url: '/api/users/:id.json',
        transformRequest: [],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }
    });
    return User;

  }];
});





// app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
//   var ref = new Firebase(FIREBASE_URL);
//   var auth = $firebaseSimpleLogin(ref);

//   var Auth = {
//     register: function (user) {
//       return auth.$createUser(user.email, user.password);
//     },
//     login: function (user) {
//       return auth.$login('password', user);
//     },
//     logout: function () {
//       auth.$logout();
//     },
//     resolveUser: function() {
//       return auth.$getCurrentUser();
//     },
//     signedIn: function() {
//       return !!Auth.user.provider;
//     },
//     user: {}
//   };

//   $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
//     console.log('logged in');
//     angular.copy(user, Auth.user);
//   });
//   $rootScope.$on('$firebaseSimpleLogin:logout', function() {
//     console.log('logged out');
//     angular.copy({}, Auth.user);
//   });

//   return Auth;
// });





