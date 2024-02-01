const express = require('express');

const Todo = require('../models/Todo')

const route = express.Router();

route.get('/', (req, res, next) => {
  Todo.getTodos(data => {
    res.send(data);
  });
});

route.post('/', (req, res, next) => {
  const todo = new Todo(req.body.task);
  todo.save(res)
})

module.exports = route;