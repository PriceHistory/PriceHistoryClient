'use strict';

var priceHistoryClient = angular.module('PriceHistoryClient');

priceHistoryClient.service('PriceHistoryService', ['$http', function ($http) {

    this.getProductPriceHistory = function(productID) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8001/price-history/' + productID,
        }).then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {
            console.log('ERROR, man');
        });
    }

}]);