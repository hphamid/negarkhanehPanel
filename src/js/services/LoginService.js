/**
 * Created by hamid on 7/25/16.
 */
angular.module("NegarKhanehPanel").factory("LoginService", ["$cookies", "$http", "RouteHelper", "HttpHelper",
    function ($cookies, $http, RouteHelper, HttpHelper) {
    var userId = $cookies.get("userId");
    var isLoading = false;
    function setUserId(muserId){
        userId = muserId;
        $cookies.put("userId", userId);
    }
    function generateUniqueId(){
        return "panel" + Math.random().toString(36).substring(10);
    }
    function updateUserId(){
        if(isLoading){
            return;
        }
        isLoading = true;
        $http.get(HttpHelper.getUser(generateUniqueId())).success(function successCallback(data, status) {
            setUserId(data._id);
        }).error(function (data, status) {
            //nothing
        });
    }
    return {
        getUserId: function(){
            if(!userId){
                updateUserId();
            }
            return userId;
        },
        checkAdminLogin: function(){
            $http.get(HttpHelper.check).success(function successCallback(data, status) {
            }).error(function successCallback(data, status) {
                RouteHelper.redirectToLoginIfNeeded(status);
            });
        }

    }
}]);