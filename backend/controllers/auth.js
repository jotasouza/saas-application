const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const jwt = require('jsonwebtoken');

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken(res);
    res.status(statusCode).json({ success: true, token });
}

//register user
exports.register = async (req, res, next) => {
    const { username, email, password} = req.body;

    const existing_email = await User.findOne({ email });

    if (existing_email) {
        return next(new ErrorResponse('Email already is use', 400));
    }

    try {
        const user = await User.create({
            username,
            email,
            password
        });

        sendToken(user, 201, res);
    } catch (error) {
        next(error);
    }
}

//login user
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    //check if email and password is provided
    if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
    }

    try {
        //check that user already exists by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        //check if password matches
        const isMatch = await user.matchPasswords(password);
        if (!isMatch) {
            return next(new ErrorResponse('Invalid credentials', 401));
        }

        sendToken(user, 200, res);
    }catch (error) {
        next(error);
    }
}

//logout user
exports.logout = (req, res) => {
    res.clearCookie('refreshToken');

   return res.status(200).json({
        success: true,
        message: 'Logged out'
    });
}
