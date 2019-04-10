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
        views: {
            '': {
                templateUrl: 'view1/view1.html'
            },
            'footer': {
                templateUrl: 'common/footer.html'
            },
            'nav': {
                templateUrl: 'common/nav.html',
            }
        }
    })
    $urlRouterProvider.otherwise('main');
}]);

/**
 * 监听碎片页面加载，添加上面的标题
 */
angular.module('myApp').service('route',['$rootScope', function ($rootScope) {
    /*监听路由改变*/
    $rootScope.$on('$stateChangeSuccess', function (event, to, pargs, from) {
        console.log(arguments);
    });
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        console.log(arguments);
    });
}])
