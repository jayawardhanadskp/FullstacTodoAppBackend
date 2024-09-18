const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.router');
const todoRouter = require('./routes/todo.route')

const app = express();

app.use(bodyParser.json());
app.use('/', userRouter); 
app.use('/', todoRouter); 


module.exports = app;
