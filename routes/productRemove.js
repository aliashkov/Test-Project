const route = require('express').Router()
const Product = require('../db').Product
const User = require('../db').User
const Cart = require('../db').Cart

route.post('/:id/:id2', (req, res) => {
    var id = req.params.id
    var user_id = req.params.id2
    Product.destroy({
        where: {
            id: id
        }
    }).then(re => {
        Cart.destroy({
            where: {
                productkey: id
            }
        })
    }).then((resu) => {
        Product.findAll({
            include: { model: User }
        }).then((result) => {
            res.send(result)
        });
    });
})
exports = module.exports = route