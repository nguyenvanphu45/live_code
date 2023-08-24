const express = require('express');
const middleware = require('../app/middleware/authentication');
const router = express.Router();

const codeController = require('../app/controllers/code.controller');

router.post('/', middleware.verifyToken, codeController.sendCode);
router.get('/', middleware.verifyToken, codeController.allCode);

module.exports = router;
