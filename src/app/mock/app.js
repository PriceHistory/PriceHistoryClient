'use strict';

var express = require('express');
var cors = require('cors');
var products = require('./data/products.json');
var app = express();

app.use(cors());

app.get('/price-history/:productID', function (req, res) {
    console.log('Retrieving price history for product with id: ' + req.params.productID);
    res.send(products);
});

app.listen(8001, function () {
    console.log('listening');
});