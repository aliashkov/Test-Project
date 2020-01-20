const route = require('express').Router()
const Product = require('../db').Product
const User = require('../db').User
const Cart = require('../db').Cart
const Wishlist = require('../db').Wishlist
route.post('/:id/:id2', (req, res) => {
    var pid = req.params.id
    var uid = req.params.id2
    Cart.findOne({ where: { orderid: "order" + uid, productkey: pid } }).then((cart) => {
        if (cart == null) {

            Wishlist.findOne({ where: { orderid: "order" + uid, productkey: pid } }).then((wishlist) => {
                if (wishlist == null) {
                    Cart.create({
                        orderid: "order" + uid,
                        productkey: pid
                    }).then((cart) => {
                        User.findOne({ where: { id: uid } }).then((users) => {
                            Product.findOne({ where: { id: pid } }).then((products) => {
                                products.addCart(cart)
                                users.addCart(cart)
                            })
                        })
                    })
                    res.json({ status: 1 })
                } else {
                    Wishlist.destroy({ where: { orderid: "order" + uid, productkey: pid } }).then((wishlist) => {
                        Cart.create({
                            orderid: "order" + uid,
                            productkey: pid
                        }).then((cart) => {
                            User.findOne({ where: { id: uid } }).then((users) => {
                                Product.findOne({ where: { id: pid } }).then((products) => {
                                    products.addCart(cart)
                                    users.addCart(cart)
                                })
                            })
                        })
                        res.json({ status: 1 })
                    })

                }

            })

        } else {
            res.json({ status: 0 })
        }
    })
})

route.get('/count/:id', (req, res) => {
    var uid = req.params.id
    Cart.findAndCountAll({
        where: {
            orderid: "order" + uid
        },
    })
        .then(result => {
            res.send(result)
        });
})

route.get('/get/:id', (req, res) => {
    var uid = req.params.id
    Cart.findAll({
        where:
        {
            orderid: "order" + uid
        },
        include: [{
            model: User

        }, {
            model: Product
        }]
    }).then(result => {
        res.send(result)
    });
})
exports = module.exports = route