/**
 * Summery Controller
 */

angular.module('NegarKhanehPanel')
    .controller('NewImagesCtrl', ['$scope', "$http", "HttpHelper", "$interval", "RouteHelper", NewImagesCtrl]);

/**
 * @return {string}
 */
function NewImagesCtrl($scope, $http, HttpHelper, RouteHelper) {
    $scope.title = "New Images";
    $scope.images = [];
    $scope.pageSize = 20;
    $scope.currentPage = 0;
    $scope.isLoading = false;
    $scope.isDone = false;
    $scope.offset = function () {
        return $scope.currentPage * $scope.pageSize;
    };
    $scope.scrollFunction = function () {
        if($scope.isLoading || $scope.isDone){
            return;
        }
        $scope.isLoading = true;
        $scope.update();
        $scope.currentPage ++;
    };
    $scope.reset = function () {
        $scope.isLoading = false;
        $scope.isDone = false;
        $scope.images = [];
        $scope.currentPage = 0;
        $scope.scrollFunction();
    };
    $scope.update = function () {
        $http.get(HttpHelper.newImageList($scope.offset(), $scope.pageSize)).success(function (data, status) {
            if(data == null || data.length == 0){
                $scope.isDone = true;
            }
            $scope.images = $scope.images.concat(data);
            $scope.isLoading = false;
        }).error(function (data, status) {
            if(RouteHelper.redirectToLoginIfNeeded(status)){
                return;
            }
            $scope.isLoading = false;
        });
    };
    $scope.formatTime = function(time){
        var date = new Date(time);
        return date.toUTCString();
    };
    $scope.scrollFunction();
    $scope.getImagePath = function(image){
        return HttpHelper.getImagePath(image.path);
    }
}
