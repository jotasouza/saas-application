const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        unique: true,
        match: [/^[a-zA-Z0-9]+$/, 'Please enter a valid username'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email'],
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 8 characters'],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Please enter a valid password'],
        selected: false,
        trim: true
    },
    costumerId: {
        type: String,
        default: '',
        required: [true, 'Please enter a costumerId'],
        unique: true,
        trim: true,
        lowercase: true
    },
    subscription: {
        type: String,
        default: '',
        required: [true, 'Please enter a subscription'],
        trim: true,
        lowercase: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, { timestamps: true });

//hash password before saving to database
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//match passwords
UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
}

//sign JWT and return
UserSchema.methods.getSignedJwtToken = function (res) {
   const accessToken = jwt.sign({ id: this._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRE });
   const refreshToken = jwt.sign({ id: this._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRE });
   res.cookie('refreshToken',`${refreshToken}`, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true });
   return{ accessToken, refreshToken }; 
}

//generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex');

    //hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    //set expire
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

    return resetToken;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;