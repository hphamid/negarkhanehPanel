/**
 * Created by hamid on 12/7/15.
 */
angular.module('NegarKhanehPanel')
    .controller('LogoutCtrl', ['$scope', "$http" , "HttpHelper", "$interval", "RouteHelper", LogoutCtrl]);

function LogoutCtrl($scope, $http, HttpHelper, $interval, RouteHelper) {
    $scope.logout = function(){
        $http.post(HttpHelper.logout).success(function(data, status){
            RouteHelper.redirectToLogin();
        }).error(function(data, status){
        });
    };
}
