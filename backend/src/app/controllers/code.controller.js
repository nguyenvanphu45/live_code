const asyncHandler = require('express-async-handler');
const codeService = require('../services/code.service');

const codeController = {
    sendCode: asyncHandler(async (req, res) => {
        try {
            let senderId = req.user.id;
            let response = await codeService.sendCode(req.body, senderId);

            res.status(200).json(response);
        } catch (error) {
            if (error.name === 'ValidationError') {
                let err = Object.values(error.errors)
                    .map((val) => val.message)
                    .join('');
                return res.status(500).json({ msg: err });
            }
            res.status(500).json({ msg: error.message });
        }
    }),
    allCode: asyncHandler(async (req, res) => {
        try {
            let response = await codeService.allCode();
            res.status(200).json(response);
        } catch (error) {
            if (error.name === 'ValidationError') {
                let err = Object.values(error.errors)
                    .map((val) => val.message)
                    .join('');
                return res.status(500).json({ msg: err });
            }
            res.status(500).json({ msg: error.message });
        }
    }),
};

module.exports = codeController;
