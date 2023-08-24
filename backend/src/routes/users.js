const express = require('express');
const middleware = require('../app/middleware/authentication');
const router = express.Router();

const usersController = require('../app/controllers/users.controller');

router.get('/:id', middleware.verifyToken, usersController.fineOne);
router.get('/', middleware.verifyTokenAdmin, usersController.findAllUser);

module.exports = router;
