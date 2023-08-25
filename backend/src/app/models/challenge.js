const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            required: true
        },
        topic: {
            type: [String],
            required: true,
        },
        example: {
            type: [
                {
                    input: { type: String },
                    output: { type: String },
                    explanation: { type: String },
                },
            ],
            required: true,
        }
    },
    { timestamps: true },
);

let Challenge = mongoose.model('Challenge', challengeSchema);
console.log(Challenge);

module.exports = Challenge;
