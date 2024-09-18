const ToDoModel = require("../model/todo.model");

class ToDoServices {
    static async createToDo (userId, title, desc) {
        const createToDo = new ToDoModel({userId, title, desc});
        return await createToDo.save();
    }

    static async getToDodata(userId) {
        const todoData = await ToDoModel.find({userId})
        return  todoData;
    }
}

module.exports = ToDoServices;