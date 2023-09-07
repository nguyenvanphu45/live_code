const challengesService = require('../services/challenges.service')

const challengeController = {
    findChallenge: async (req, res) => {
        try {
            let response = await challengesService.findChallenge(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    },
    findAllChallenge: async (req, res) => {
        try {
            let response = await challengesService.findAll(req.users);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    },
    updateChallenge: async (req, res) => {
        try {
            let id = req.params.id;
            let data = req.body;
            let response = await challengesService.updateChallenge(id, data);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    }
};

module.exports = challengeController;
