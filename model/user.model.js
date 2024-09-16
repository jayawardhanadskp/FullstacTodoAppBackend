const mongoose = require('mongoose');
const bcript = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
        type:String,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre('save',async function() {
    try {
        var user = this;
        const salt = await(bcript.genSalt(10));
        const hashpass = await bcript.hash(user.password,salt);

        user.password = hashpass;
    } catch (e) {
        throw e;
    }
});

userSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcript.compare(userPassword, this.password);
    } catch (error) {
        throw error;
    }
}

const UserModel = db.model('user', userSchema);

module.exports = UserModel;