// var app = angular.module('meanMapApp', ['addCtrl', 'geolocation']);
angular.module('meanMapApp', ['geolocation', 'ngRoute'])
    .config(function($routeProvider) {


        $routeProvider
            .when('/join', {
                controller: 'addCtrl',
                templateUrl: '/partials/addForm.html'
            })
            .when('/find', {
                controller: 'queryCtrl',
                templateUrl:'partials/queryForm.html'
            })
            .otherwise({redirectTo: '/join'})
            

    })
