const ToDoServices = require("../services/todo.servise");

exports.createToDo = async (req, res, next) => {
    try {
        const {userId, title, desc} = req.body;

        if (!userId || !title || !desc) {
            return res.status(400).json({status: false, message: 'All fields re require'})
        }

        let todo = await ToDoServices.createToDo(userId, title, desc);

        res.status(201).json({status:true, success:todo});
    } catch (e) {
        next(e);
        res.status(500).json({status: false, message: 'Fail to create todo', error: e.message});
    }
}

exports.getUserToDo = async (req, res, next) => {
    try {
        const {userId} = req.body;

        if (!userId) {
            return res.status(400).json({status: false, message : 'User Id is required'});
        }

        let todo = await ToDoServices.getToDodata(userId);

        if (!todo) {
            return res.status(404).json({ status: false, message: 'No Data'});
        }

        res.json({status: true, success:todo});
    } catch (e) {
        next(e);
        res.status(500).json({status: false, message:  'Fail to get user todo', error: e.message});
    }
}

exports.deleteToDo = async (req, res, next) => {
    try {
        const {id} = req.body;

        let deleted = await ToDoServices.deleteToDo(id);

        res.json({status: true, sucess:deleted});
    } catch (e) {
        next(e);
    }
}