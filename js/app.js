/**
 * Created by lenovo on 2016/10/24.
 */
var myapp = angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $stateProvider.state("GuidePage",{
        url:"/GuidePage",
        templateUrl:"views/GuidePage/GuidePage.html"
    });

    $urlRouterProvider.otherwise("/GuidePage");
});
