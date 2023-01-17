const User = require('../models/User.model')
const jwt = require('jsonwebtoken');
const LoginUser = async (req, res) => {
    try {
        let { UserName, PassWd } = req.body;
        console.log(req.body);
        let userNameExiste = await User.findOne({ UserName: UserName }).then((res) => {
            if (res) {
                return true
            } else {
                return false
            }
        })
        console.log('username', userNameExiste)

        if (userNameExiste) {
            let user = await User.findOne({ PassWd: PassWd });

            if (user) {
                let token = jwt.sign({ user: user._id }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
                res.json({
                    success: true,
                    result: {
                        token: token,
                        user: user.UserName

                    }
                })

            } else {
                console.log('password false')
                res.json({
                    success: false,
                    message: 'password incorrect'

                })
            }
        } else {
            res.json({
                success: false,
                message: 'user name icorrect'

            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            result: error.message
        })
    }
}


const getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.json({
            success: true,
            result: users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            result: error.message
        })
    }
}
module.exports = {
    LoginUser, getAllUsers
}