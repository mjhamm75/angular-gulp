var config = function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'module1Controller',
		templateUrl: 'app/js/module1/module1.html'
	});
};

var controller = function($scope){
	$scope.test = "Kurt is a weenie";
};

module.exports = {
	controller: controller,
	config: config
};