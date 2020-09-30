const express = require('express');
const router = express.Router()
const userAccountService = require('../services/userAccouts');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(userAccountService)

module.exports = router