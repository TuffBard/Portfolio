<!DOCTYPE html>
<html>
<head>
	<title>AngularJS</title>
</head>
<body ng-app>
	<div ng-init="users=['Marc','Jean']"></div>
	<input type="text"/>
	<ul>
		<li ng-repeat="user in users">{{user | uppercase}}</li>
	</ul>
	{{users}}

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
</body>
</html>