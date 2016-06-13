'use strict';

var priceHistoryClient = angular.module('PriceHistoryClient', []);

priceHistoryClient.controller('PriceHistoryCtrl', ['$scope', 'PriceHistoryService', function ($scope, PriceHistoryService) {

    $scope.getProductPriceHistory = function(productID) {
        PriceHistoryService.getProductPriceHistory(productID);
        $scope.productID = '';
    };

}]);