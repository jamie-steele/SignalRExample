"use strict";
app.factory("signalRHubProxy", ["$rootScope", "serverUrl", "hubName",
    function ($rootScope, serverUrl, hubName) {
        var connection = jQuery.hubConnection(serverUrl + "/signalr/hubs");
        var proxy = connection.createHubProxy(hubName);

        function signalRHubProxy() {

            return {
                on: function (eventName, callback) {
                    proxy.on(eventName, function (result) {
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                        });
                    });
                },
                off: function (eventName, callback) {
                    proxy.off(eventName, function (result) {
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                        });
                    });
                },
                invoke: function (methodName, args, callback) {
                    proxy.invoke(methodName, args)
                        .done(function (result) {
                            $rootScope.$apply(function () {
                                if (callback) {
                                    callback(result);
                                }
                            });
                        });
                },
                invokeAlt: function (methodName) {
                    proxy.invoke(methodName);
                },
                connection: connection
            };
        };

        function startConnection(startOptions) {
            connection.start(startOptions).done(function () {
                console.log("Now connected, connection ID=" + connection.id);
            }).fail(function () {
                console.log("Could not Connect!");
            });
        }

        return {
            signalRHubProxy: signalRHubProxy,
            startConnection: startConnection
        }
}]);
