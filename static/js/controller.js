var myApp = angular.module('myApp', [
 'ngRoute',
]);
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'../static/html/login.html'
	})
	.when('/dashboard', {
		resolve: {
			"check": function($location, $rootScope) {
				if(!$rootScope.loggedIn) {
					$location.path("/");
				}
			}
		},
		templateUrl:'../static/html/dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});

myApp.controller('loginCtrl', function($scope, $location, $rootScope) {
	$scope.submit = function() {
		var name = $scope.username;
		var password = $scope.password;
		if((name == "Tiltchalla" || name == "drbikembe") && (name == password)) {
			$rootScope.loggedIn	= true;
			$location.path('/dashboard');
		}

	}
})
