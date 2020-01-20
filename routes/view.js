const route = require('express').Router()
const Product = require('../db').Product
const User = require('../db').User
route.get('/:id', (req, res) => {
    var pid = req.params.id
    Product.findAll({ include: User, where: { id: pid } }).then((products) => {
        res.send(products)
    }).catch((products) => {
        res.send(products)
    })
})
exports = module.exports = route