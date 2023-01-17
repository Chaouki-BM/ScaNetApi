const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String, required: true
    },
    PassWd: {
        type: String, required: true
    }
},
    {
        timestamps: true
    });
module.exports = mongoose.model('User', UserSchema)