const mongoose = require('mongoose');

const MachineListSchema = new mongoose.Schema({
    NameMachine: {
        type: String, require: true
    },
    IpMachine: {
        type: String, require: true
    },
    isOnline: {
        type: Boolean, required: true, default: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('MachineList', MachineListSchema);