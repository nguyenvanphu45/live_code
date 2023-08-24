const mongoose = require('mongoose');

const codeSchema = mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        content: {
            type: String,
            require: [true, 'Invalid data passed into request'],
            trim: true,
        },
        challenge: {
            type: mongoose.Schema.Types.ObjectId,
            require: [true, 'Invalid data passed into request'],
            ref: 'Challenge',
        },
        createAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timeStamps: true },
);

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;
