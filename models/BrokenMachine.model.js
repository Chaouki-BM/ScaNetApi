const mongoose = require('mongoose');

const BrokenMachineSchema = new mongoose.Schema({
    NameBrokenMachine: {
        type: String, require: true
    },
    IpBrokenMachine: {
        type: String, require: true
    },

}, {
    timestamps: true
});
module.exports = mongoose.model('BrokenMachine', BrokenMachineSchema);