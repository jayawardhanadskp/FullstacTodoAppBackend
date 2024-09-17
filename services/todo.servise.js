const ToDoModel = require("../model/todo.model");

class ToDoServices {
    static async createToDo (userId, title, desc) {
        const createToDo = new ToDoModel({userId, title, desc});
        return await createToDo.save();
    }
}

module.exports = ToDoServices;