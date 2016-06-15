'use strict';

var priceHistoryClient = angular.module('PriceHistoryClient', []);

priceHistoryClient.controller('PriceHistoryCtrl', ['$scope', 'PriceHistoryService', function ($scope, PriceHistoryService) {

    $scope.getProductPriceHistory = function(productID) {
        var history = PriceHistoryService.getProductPriceHistory(productID);
        return history.then(function (response) {
            return response.data;
        });
    };

}]);