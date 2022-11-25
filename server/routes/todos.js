const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createNewTodo,
} = require('./../controllers/todosControllers');

router.route('/').get(getAllTodos).post(createNewTodo);

module.exports = router;
