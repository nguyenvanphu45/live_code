const Challenge = require('../models/challenge');
const mongooseSimpleRandom = require('mongoose-simple-random');

const challengesService = {
    findOne: (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const challenge = await Challenge.findById(id);

                if (!challenge) {
                    resolve({
                        message: 'Challenge not found',
                    });
                }

                resolve({
                    challenge: challenge,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    findAll: () => {
        return new Promise(async (resolve, reject) => {
            try {
                // let query = Challenge.find({}).skip(10).limit(2);
                // let challenge = await query.exec();

                // const randomChallenges = mongooseSimpleRandom.shuffle(challenge);
                let challenge = await Challenge.find()

                resolve({
                    challenge: challenge,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    updateChallenge: (id, data) => {
        return new Promise(async (resolve, reject) => {
            try {
                const updatedChallenge = await Challenge.findByIdAndUpdate(id, { ...data }, { new: true });
                resolve({
                    challenge: updatedChallenge,
                });
            } catch (e) {
                reject(e);
            }
        });
    },
};

module.exports = challengesService;
