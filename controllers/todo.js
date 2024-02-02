const Todo = require('../models/Todo')

const getTodos = (req, res, next) => {
  Todo.getTodos(data => {
    res.send(data);
  });
}

const postTodo = (req, res, next) => {
  const todo = new Todo(req.body.task);
  todo.save(res);
}

const patchTodo = (req, res, next) => {
  const todoId = req.params.todoId;
  const updatedData = req.body;

  Todo.update(todoId, updatedData, res);
}

const deleteTodo = (req, res, next) => {
  const todoId = req.params.todoId;

  Todo.delete(todoId, res);
}

module.exports = {getTodos, postTodo, patchTodo, deleteTodo}