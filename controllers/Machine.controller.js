const express = require('express');
const Machine = require('../models/MachineList.model')

const MachineList = async (req, res) => {
    try {
        let Machines = await Machine.find();
        res.json({
            success: true,
            result: Machines

        })
    } catch (e) {
        res.status(500).json({
            success: false,
            result: e.message
        })
    }
}

const AddMachine = async (req, res) => {
    try {
        let { NameMachine, IpMachine } = req.body;
        let NewMachine = new Machine({ NameMachine, IpMachine });
        let result = await NewMachine.save();
        res.json({
            success: true,
            result: result
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            result: e.message
        })
    }
}

const BrokenList = async (req, res) => {
    try {
        let Broken = await Machine.find({ isOnline: false });
        res.status(200).json({
            success: true,
            result: Broken

        })
    } catch (e) {
        res.status(500).json({
            success: false,
            result: e.message
        })
    }
}
const DeleteMachine = async (req, res) => {
    try {
        let Id = req.params.id;
        console.log('id here', Id)
        let Deletes = await Machine.findByIdAndDelete(Id);
        res.status(200).json({
            success: true,
            result: Deletes
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            result: e.message
        })

    }
}

const FixBroken = async (req, res) => {
    try {
        let Id = req.params.id;
        console.log('id here', Id)
        let MachineFixed = await Machine.findByIdAndUpdate(Id, { isOnline: true });
        res.status(200).json({
            success: true,
            result: MachineFixed
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            result: e.message
        })

    }
}

module.exports = {
    MachineList, AddMachine, BrokenList, DeleteMachine, FixBroken
}