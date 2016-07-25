/**
 * Created by hamid on 12/7/15.
 */
angular.module('NegarKhanehPanel')
    .controller('NewImageCtrl', ['$scope', "$http" , "HttpHelper", "$interval", "RouteHelper", NewImageCtrl]);

function NewImageCtrl($scope, $http, HttpHelper, $interval, RouteHelper) {
    $scope.form = { released: false };
    $scope.upload = function(){
        var formData = new FormData();
        formData.append("image", $scope.form.image);
        formData.append("name", $scope.form.name);
        formData.append("released", $scope.form.released);

        $http({
            method: 'POST',
            url: HttpHelper.uploadNewImage,
            data: formData,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function(data, status){
            if(data._id){
                if(data.released){
                    RouteHelper.redirectToMainPage();
                }else{
                    RouteHelper.redirectToNotReleasedPage();
                }
            }else{
                $scope.error = data;
            }
        }).error(function(data, status){
            alert(data);
        });
    };
}
