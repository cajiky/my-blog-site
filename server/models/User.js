// this is our schema for our user system and authentication and user levles

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { BabyChangingStation } = require('@mui/icons-material');

//setting up the schema for how i want our user
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
});

UserSchema.pre('save', async function (next) {
    if(this.isModified('password'))return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;