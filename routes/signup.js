const route = require('express').Router()
const User = require('../db').User

route.post('/', function (req, res) {
  User.create({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
    course: req.body.course,
    address: req.body.address,
    college: req.body.college
  })
})
exports = module.exports = route