'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
        url: '/main',
        view: {
            '': {
                templateUrl: 'view1/view1.html'
            },
            'footer': {
                templateUrl: 'common/footer.html'
            },
            'nav': {
                templateUrl: 'common/nav.html'
            }
        }
    });
    $urlRouterProvider.otherwise('main');
}])
