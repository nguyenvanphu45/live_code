const express = require('express');
const middleware = require('../app/middleware/authentication');
const router = express.Router();

const challengeController = require('../app/controllers/challenge.controller');

router.get('/:id', middleware.verifyToken, challengeController.findChallenge);
router.get('/', middleware.verifyToken, challengeController.findAllChallenge);
router.put('/update/:id', middleware.verifyToken, challengeController.updateChallenge);

module.exports = router;
