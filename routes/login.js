const route = require('express').Router()
const User = require('../db').User

route.post('/', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    }).then((users) => {
        res.status(200).send(users)
    }).catch((err) => {
        res.send('')
    })
})

route.get('/:id', (req, res) => {
    var pid = req.params.id
    User.findAll({ where: { id: pid } }).then((users) => {
        res.send(users)
    }).catch((users) => {
        res.send(users)
    })
})
exports = module.exports = route