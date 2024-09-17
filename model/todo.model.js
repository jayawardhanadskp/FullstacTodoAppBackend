const db = require('../config/db');
const mongose = require('mongoose');
const UserModel = require('../model/user.model')

const { Schema } = mongose;

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const ToDoModel = db.model('todo', todoSchema);

module.exports = ToDoModel;