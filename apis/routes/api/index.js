const router = require('express').Router();
const apiUsers = require('./users');
const apiAuth = require('./auth');
const apiCont =require('./contacts')

router.use('/users', apiUsers);
router.use('/auth', apiAuth);
router.use('/contacts', apiCont);

module.exports = router;