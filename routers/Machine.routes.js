const router = require('express').Router();
const { MachineList, AddMachine, DeleteMachine, BrokenList, FixBroken } = require('../controllers/Machine.controller');
const verifToken = require('../utils/VerifToken');

router.get('/MachineList', MachineList);
router.post('/AddMachine', AddMachine);
router.get('/BrokenMachine', BrokenList);
router.delete('/DeleteMachine/:id', DeleteMachine);
router.patch('/FixBroken/:id', FixBroken);
module.exports = router;