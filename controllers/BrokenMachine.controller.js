// const express = require('express');
// const BrokenList = require('../models/MachineList.model')

// const BrokenMachine = async (req, res) => {
//     try {
//         let Broken = await BrokenList.find({ isOnline: false });
//         res.status(200).json({
//             success: true,
//             result: Broken

//         })
//     } catch (e) {
//         res.status(500).json({
//             success: false,
//             result: e.message
//         })
//     }
// }
// module.exports = { BrokenMachine }