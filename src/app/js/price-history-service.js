'use strict';

var priceHistoryClient = angular.module('PriceHistoryClient');

priceHistoryClient.service('PriceHistoryService', ['$http', function ($http) {

    this.getProductPriceHistory = function(productID) {
        $http({
            method: 'GET',
            url: 'http://localhost:8001/price-history/' + productID,
        }).then(function successCallback(response) {
            console.log(response.data);
            console.log('success request');
        }, function errorCallback(response) {
            console.log(response.data);
            console.log('failure request');
        });
        console.log('getting price history');
    }

}]);