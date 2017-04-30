var app = angular.module("mainModule", [])
    .constant("serverUrl", "http://signalrexampleapi.azurewebsites.net")
    .value("hubName", "DefaultHub")
    .controller("mainController",
    function ($scope, $http, apiService, signalRHubProxy) {

        var defaultHub = signalRHubProxy.signalRHubProxy();

        defaultHub.on("sendData", function (data) {
            var tasks = JSON.parse(data);

            $scope.tasks = tasks;
        });

        signalRHubProxy.startConnection({ logging: true });

        $scope.submitData = function () {
            var myData = {
                taskName: $scope.taskName,
                taskOwner: $scope.taskOwner
            }

            apiService.postFiles(myData).then(function (response) {
                console.log(response.data);
            });
        };
});