var myApp = angular.module('myApp', [
 'ngRoute',
]);
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'../static/html/login.html'
	})
	.when('/welcome', {
		templateUrl:'../static/html/welcome.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});

myApp.controller('loginCtrl', function($scope, $location) {
	$scope.submit = function() {
		var name = $scope.username;
		var password = $scope.password;
		if(name == password) {
			$location.path('/welcome');
		}

	}
})
