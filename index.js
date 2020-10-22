var lodash = require('lodash')
var products = require('./data/products.json')
var fs = require('fs')

//Producto mayor a 30 pesos.
const productsFilters = products.filter(product => product.price > 30);



console.log('Lista filatrada: ',productsFilters)
console.log(lodash.shuffle(productsFilters))