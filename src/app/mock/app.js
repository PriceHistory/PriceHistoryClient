'use strict';

var express = require('express');
var products = require('./data/products.json');
var app = express();

app.get('/', function (req, res) {
    res.send(products);
});

app.listen(3000, function () {
    console.log('listening');
});