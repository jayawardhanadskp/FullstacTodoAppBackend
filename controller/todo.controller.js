const ToDoServices = require("../services/todo.servise");

exports.createToDo = async (req, res, next) => {
    try {
        const {userId, title, desc} = req.body;

        let todo = await ToDoServices.createToDo(userId, title, desc);

        res.json({status:true, success:todo});
    } catch (e) {
        next(e);
    }
}

exports.getUserToDo = async (req, res, next) => {
    try {
        const {userId} = req.body;

        let todo = await ToDoServices.getToDodata(userId);

        res.json({status: true, success:todo});
    } catch (e) {
        next(e);
    }
}