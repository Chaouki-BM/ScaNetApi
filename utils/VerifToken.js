const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const verifToken = async (req, res, next) => {
    let bearerHeader = req.headers['authorization'];
    let brearer = bearerHeader.split(" ");
    console.log(brearer)
    token = brearer[1];
    console.log(token)
    if (!token) {
        res.status(400).json({
            success: false,
            message: 'No token '
        })
    } else {
        try {
            let verif = jwt.verify(token, process.env.TOKEN_SECRET);
            if (!verif) {
                res.status(400).json({
                    success: false,
                    message: 'Invalid token '
                })
            } else {
                let decoded = jwt.decode(token);
                let user = await User.findById(decoded.user);
                req.user = user;
                console.log(req.user, decoded)
                next()
            }
        } catch (e) {
            res.status.json({
                success: false,
                message: e.message
            })
        }
    }
}
module.exports = verifToken