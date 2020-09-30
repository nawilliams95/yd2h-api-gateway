const express = require('express');
const router = express.Router()
const userAccountService = require('../services/userAccouts');
const userCMSService = require('../services/userCms');
const taggingService = require('../services/tagging');
const commentService = require('../services/comments');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(userAccountService);
router.use(userCMSService);
router.use(taggingService);
router.use(commentService);


module.exports = router