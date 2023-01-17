const router = require('express').Router();
const { LoginUser, getAllUsers } = require('../controllers/User.controller');
const verifToken = require('../utils/VerifToken')
router.post('/login', LoginUser);
router.get('/allUsers', getAllUsers);

module.exports = router;