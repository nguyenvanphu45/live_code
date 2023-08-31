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
    // update code
    updateUser: (id, data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { content, challengeId, status, ...rest } = data;

                const updatedChallenge = await User.findOneAndUpdate(
                    { _id: id, 'code.challengeId': challengeId },
                    { $set: { 'code.$.content': content } },
                    { new: true },
                );

                if (!updatedChallenge) {
                    const newCode = {
                        content: content,
                        challengeId: challengeId,
                    };
                    await User.findByIdAndUpdate(id, {
                        $push: {
                            code: newCode,
                        },
                        $set: { status: status },
                        ...rest,
                    });
                }

                resolve({
                    message: 'Update success!',
                    user: updatedChallenge,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    // update status
    updateStatusUser: (id, data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { status, ...rest } = data;

                const updatedStatus = await User.findByIdAndUpdate(
                    id,
                    {
                        $set: { status: status },
                        ...rest,
                    },
                    { new: true },
                );

                resolve({
                    message: 'Update success!',
                    user: updatedStatus,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = usersService;
