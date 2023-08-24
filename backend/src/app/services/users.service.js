const User = require('../models/users');
const bcrypt = require('bcrypt');

const usersService = {
    findOne: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await User.findById(id);

                if (!user) {
                    resolve({
                        message: 'User not found',
                    });
                }

                resolve({
                    user: user,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    findAllUser: (admin) => {
        return new Promise(async (resolve, reject) => {
            try {
                let user = await User.find({ _id: { $ne: admin } }).populate('code');
                resolve({
                    user: user,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = usersService;
