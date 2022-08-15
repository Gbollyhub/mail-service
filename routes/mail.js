//packages import
const express = require('express');

//controllers import
const sendMail = require('../controllers/mail');
const verifyMail = require('../controllers/verify')
//initializing express router
const router = new express.Router()

//movie routes
router.post('/send-mail', sendMail)
router.post('/verify-mail', verifyMail)

//router export
module.exports = router;