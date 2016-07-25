/**
 * Created by hamid on 12/5/15.
 */

angular.module("NegarKhanehPanel").factory("RouteHelper", ["$state", function ($state) {
    return {
        redirectToLogin:  function(){
            $state.go('login');
        },
        redirectToMainPage: function(){
            $state.go('main.new')
        },
        redirectToNotReleasedPage: function(){
            $state.go('main.notReleased')
        },
        redirectToLoginIfNeeded:  function(status){
            console.log("status is " + status);
            if(status == 401){
                $state.go('login');
                return true;
            }
            return false;
        }
    }
}]);