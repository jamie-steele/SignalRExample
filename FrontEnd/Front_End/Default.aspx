<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Front_End.Main" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/signalr/jquery.signalr-2.2.1.js"></script>
    <script src="http://signalrexampleapi.azurewebsites.net/signalr/hubs"></script>
    <script src="app/controllers/MainController.js"></script>
    <script src="app/factories/ApiService.js"></script>
    <script src="app/factories/SignalRHubProxy.js"></script>
    <title>SignalR Example</title>
</head>
<body>
    <form id="form1" runat="server">
    <div ng-app="mainModule">
        <div ng-controller="mainController">
            <input name="taskName" type="text" ng-model="taskName"/>
            <input name="taskOwner" type="text" ng-model="taskOwner"/>
            <button type="button" ng-click="submitData()">Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>OWNER</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="task in tasks">
                        <td>{{task.data.taskName}}</td>
                        <td>{{task.data.taskOwner}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </form>
</body>
</html>
