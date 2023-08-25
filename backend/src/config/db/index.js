const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://phunguyen:Phu123123@cluster0.tgh56po.mongodb.net/');
        console.log("Connect successfully!");
    } catch (error) {
        console.log("Connect failure!");
    }
}

module.exports = { connect };
