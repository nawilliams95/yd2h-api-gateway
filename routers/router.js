const express = require('express');
const router = express.Router()
const userAccountService = require('../services/userAccouts');
const userCMSService = require('../services/userCms');
const taggingService = require('../services/tagging');
const commentService = require('../services/comments');
const adminService = require('../services/adminConsole');


router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(userAccountService);
router.use(userCMSService);
router.use(taggingService);
router.use(commentService);
router.use(adminService);

module.exports = router