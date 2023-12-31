const usersService = require('../services/users.service');

const usersController = {
    // [GET] /users/:id
    fineOne: async (req, res) => {
        try {
            let response = await usersService.findOne(req.params.id);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    },

    // [GET] /users/
    findAllUser: async (req, res) => {
        try {
            let response = await usersService.findAllUser();
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    },

    // [PUT] /users/update/:id
    updateUser: async (req, res) => {
        try {
            let id = req.params.id;
            let data = req.body;
            let response = await usersService.updateUser(id, data);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    },

    // [PUT] /users/status/update/:id
    updateStatusUser: async (req, res) => {
        try {
            let id = req.params.id;
            let data = req.body;
            let response = await usersService.updateStatusUser(id, data);
            res.status(200).json(response);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.message });
        }
    },
};

module.exports = usersController;
