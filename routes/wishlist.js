const route = require('express').Router()
const Product = require('../db').Product
const User = require('../db').User
const Wishlist = require('../db').Wishlist
const Cart = require('../db').Cart

route.post('/:id/:id2', (req, res) => {
    var pid = req.params.id
    var uid = req.params.id2
    Wishlist.findOne({ where: { orderid: "order" + uid, productkey: pid } }).then((wishlist) => {
        if (wishlist == null) {
            Cart.findOne({ where: { orderid: "order" + uid, productkey: pid } }).then((cart) => {
                if (cart == null) {
                    Wishlist.create({
                        orderid: "order" + uid,
                        productkey: pid
                    }).then((Wishlist) => {
                        User.findOne({ where: { id: uid } }).then((users) => {
                            Product.findOne({ where: { id: pid } }).then((products) => {
                                products.addWishlist(Wishlist)
                                users.addWishlist(Wishlist)
                            })
                        })
                    })
                    res.json({ status: 1 })
                } else {
                    res.json({ status: 2 })
                }
            })
        } else {
            res.json({ status: 0 })
        }

    })

})

route.get('/count/:id', (req, res) => {
    var uid = req.params.id
    Wishlist.findAndCountAll({
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
    Wishlist.findAll({
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