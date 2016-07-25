/**
 * Created by hamid on 12/5/15.
 */

angular.module("NegarKhanehPanel").factory("HttpHelper", [function () {
    //var mainAddress = "http://godfather.abrstudio.ir";
    //var mainAddress = "http://test.abrstudio.ir";
    //var mainAddress = "http://127.0.0.1:8080";
    var mainAddress = "";
    var mainAdminAdress = mainAddress + "/admin";
    var mainApiAddress = mainAddress + "/api";
    return {
        login: mainAddress + "/login",
        logout: mainAddress + "/logout",
        check: mainAdminAdress + "/check",
        uploadNewImage: mainAdminAdress + "/newImage",

        newImageList: function(start, count){
            return mainApiAddress + "/new/" + start + "/" + count;
        },
        popularImageList: function(start, count){
            return mainApiAddress + "/new/" + start + "/" + count;
        },
        notReleasedImageList: function(start, count){
            return mainAdminAdress + "/notReleased/" + start + "/" + count;
        },
        renameImage: function(imageId){
            return mainAdminAdress + "/rename/" + imageId;
        },
        releaseImage: function(imageId){
            return mainAdminAdress + "/released/" + imageId;
        },
        getImageItem: function(imageId){
            return mainApiAddress + "/image/" + imageId;
        },
        getUser: function(uniqueId){
            return mainAddress + "/getUser/" + uniqueId;
        },
        getImagePath: function(imagePath){
            return mainAddress + "/image/" + imagePath;
        }
    }
}]);
