/**
 * core module imports
 */

/**
 * third-party module imports
 */
const express = require('express');

/**
 * local module imports
 */
const controller = require('../controllers/todo')

const route = express.Router();

route.get('/', controller.getTodos);

route.post('/add', controller.postTodo)

route.patch('/edit/:todoId', controller.patchTodo)

route.delete('/delete/:todoId', controller.deleteTodo)

module.exports = route;