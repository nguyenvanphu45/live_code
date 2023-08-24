const Code = require('../models/code');
const Challenge = require('../models/challenge');
const User = require('../models/users');

const codeService = {
    sendCode: (data, senderId) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { content, challengeId } = data;

                let newMessage = {
                    sender: senderId,
                    content: content,
                    challenge: challengeId,
                };

                let message = await Code.create(newMessage);

                message = await message.populate({ path: 'sender', select: 'email' });
                message = await message.populate('challenge');
                message = await User.populate(message, {
                    path: 'challenge.users',
                    select: 'email',
                });

                // await Challenge.findByIdAndUpdate(challengeId, { latestMessage: message });

                resolve(message);
            } catch (e) {
                reject(e);
            }
        });
    },
    allCode: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const code = await Code.find().populate('sender', 'email').populate('challenge');
                resolve(code);
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = codeService;
