'use strict';

angular.module('myApp.view1', [])
    .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function (data) {
            console.log(data)
            $scope.bpiData=data.data;
        });
    }]);
