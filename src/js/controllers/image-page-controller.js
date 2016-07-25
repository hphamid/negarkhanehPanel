/**
 * Summery Controller
 */

angular.module('NegarKhanehPanel')
    .controller('ImagePageCtrl', ['$scope', "$http", "HttpHelper", "$stateParams", "ngDialog", "RouteHelper", ImagePageCtrl]);

function ImagePageCtrl($scope, $http, HttpHelper, $stateParams, ngDialog, RouteHelper) {
    $scope.image = null;
    var dialog = null;
    $scope.get = function () {
        $scope.image = null;
        $http.get(HttpHelper.getImageItem($stateParams.imageId)).success(function (data, status) {
            $scope.image = data;
        }).error(function (data, status) {
            $scope.village = {};
            $scope.user = {};
        });
    };

    $scope.userPurchasesLink = function(){
        return HttpHelper.userPurchasesAddress($stateParams.userName);
    };
    $scope.getImagePath = HttpHelper.getImagePath;

    $scope.openRenameDialog = function () {
        dialog = ngDialog.open({template: 'rename.html', scope: $scope});
    };
    $scope.openReleaseDialog = function () {
        dialog = ngDialog.open({template: 'release.html', scope: $scope});
    };

    $scope.closeDialog = function () {
        if (dialog == null) {
            return;
        }
        dialog.close();
        dialog = null;
    };

    $scope.release = function (released) {
        $scope.closeDialog();
        $http({
            method: 'POST',
            url: HttpHelper.releaseImage($scope.image.image._id),
            data: $.param({released: released}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data, status){
            $scope.get();
        }).error(function(data, status){
            if (RouteHelper.redirectToLoginIfNeeded(status)) {
                return;
            }
            alert("problem!!");
        });
    };

    $scope.rename = function (name) {
        $scope.closeDialog();
        $http({
            method: 'POST',
            url: HttpHelper.renameImage($scope.image.image._id),
            data: $.param({name: name}),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, state) {
            $scope.get();
        }).error(function (data, status) {
            if (RouteHelper.redirectToLoginIfNeeded(status)) {
                return;
            }
            alert("problem!!");
        });
    };


    $scope.get();
}
