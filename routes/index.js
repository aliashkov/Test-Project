const route = require('express').Router()
const Product = require('../db').Product


route.get('/', (req, res) => {
        Product.findAll().then((products) => {
                res.send(products)
        }).catch((products) => {
                res.send(products)
        })
})
exports = module.exports = route