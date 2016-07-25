/**
 * Loading Directive
 * @see http://tobiasahlin.com/spinkit/
 */

angular
    .module('NegarKhanehPanel')
    .directive('fileread', fileread);

function fileread() {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                //var reader = new FileReader();
                //reader.onload = function (loadEvent) {
                //    scope.$apply(function () {
                //        scope.fileread = loadEvent.target.result;
                //    });
                //};
                //reader.readAsDataURL(changeEvent.target.files[0]);
                scope.fileread = changeEvent.target.files[0];
            });
        }
    }
}