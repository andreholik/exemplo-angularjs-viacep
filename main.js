var app = angular.module("calculadora", []);

app.controller("controllerApp", function ($scope, $http){
	$scope.buscarCep = function(cepParam){
		$http
			.get("https://viacep.com.br/ws/" + cepParam + "/json/")
			.then(function(retorno){
				$scope.localidade = retorno.data.localidade;
			});
	}
});