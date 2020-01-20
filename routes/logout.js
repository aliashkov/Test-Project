const route = require('express').Router();


route.get('/', (req, res) => {
        req.session.destroy();
        res.redirect('/')

});


exports = module.exports = route