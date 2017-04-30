"use strict";
app.factory("apiService", ["$http", "serverUrl", function ($http, serverUrl) {

    function postFiles(data) {
        var request = $http({
            method: "post",
            url: serverUrl + "/api/Default",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                data: data
            }
        });
        return request.then(handleSuccess, handleError);
    }

    function handleSuccess(response) {
        console.log("%cSuccess the server responded with a status of " + response.status, "color:green");
        return response;
    }

    function handleError(response) {
        console.log("%cFailed to load resource the server responded with a status of " + response.status,
            "color:red");
        return response;
    }

    return {
        postFiles: postFiles
    };
}]);
