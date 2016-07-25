/**
 * Created by hamid on 12/7/15.
 */
angular.module('NegarKhanehPanel')
    .controller('LoginCtrl', ['$scope', "$http" , "HttpHelper", "$interval", "RouteHelper", LoginCtrl]);

function LoginCtrl($scope, $http, HttpHelper, $interval, RouteHelper) {
    $scope.error = null;
    $scope.login = function(userName, password){
        $http({
            method: 'POST',
            url: HttpHelper.login,
            data: $.param({userName: userName, password: password}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data, status){
            if(data._id){
                RouteHelper.redirectToMainPage();
            }else{
                $scope.error = data;
            }
        }).error(function(data, status){
            $scope.error = "Problem!";
        });
    };
}
