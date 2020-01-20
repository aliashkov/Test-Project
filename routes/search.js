const route = require('express').Router()
const Product = require('../db').Product
const User = require('../db').User
const Cart = require('../db').Cart
const Sequelize = require('sequelize')
const op = Sequelize.Op

route.get('/:id', (req, res) => {
    var search_query = req.params.id
    Product.findAll({
        where:
        {
            [op.or]: [{ authorName: { [op.like]: '%' + search_query + '%' } }, { name: { [op.like]: '%' + search_query + '%' } }, { condition: search_query }]
        },
        include: {
            model: User

        }
    }).then(result => {
        res.send(result)
    })
})
route.get('/price/:id', (req, res) => {
    var flag = req.params.id
    if (flag == 12) {
        Product.findAll({
            order: Sequelize.literal('(resellPrice) DESC'),
            include: {
                model: User

            }
        }).then(result => {
            res.send(result)
        });
    } else {
        Product.findAll({
            order: Sequelize.literal('(resellPrice)'),
            include: {
                model: User

            }
        }).then(result => {
            res.send(result)
        });
    }
})
route.get('/', (req, res) => {
    Product.max('resellPrice').then((max) => {
        Product.min('resellPrice').then((min) => {
            res.json({ min: min, max: max })
        })
    })
})
exports = module.exports = route
