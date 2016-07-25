angular.module('NegarKhanehPanel', ['ui.bootstrap', 'ui.router', 'ngCookies', 'ngDialog', 'infinite-scroll']);

angular.module('NegarKhanehPanel').run(["$http", "LoginService", function($http, LoginService){
    $http.defaults.headers.common.UserId = LoginService.getUserId();
}]);