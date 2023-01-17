const ping = require('ping');
const Machine = require('../models/MachineList.model');

const pingMachines = async () => {
    setInterval(async () => {
        let AllMachines = await Machine.find({});
        AllMachines.forEach((machine) => {
            if (machine.isOnline == true) {
                ping.sys.probe(machine.IpMachine, async (isAlive) => {
                    console.log(machine.IpMachine, isAlive)
                    if (!isAlive) {
                        await Machine.findByIdAndUpdate(machine._id, { isOnline: false })
                    }
                });
            } else {
                console.log(machine.IpMachine, 'false')
            }
        })
    }, 10 * 10000)
}
module.exports = { pingMachines };