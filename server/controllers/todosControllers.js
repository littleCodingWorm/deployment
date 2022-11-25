const Todo = require('./../models/todosModel');

exports.getAllTodos = (req, res, next) => {
  Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((error) => console.log(error));
};

exports.createNewTodo = (req, res, next) => {
  const task = req.body.task;
  const completed = req.body.completed;

  const todo = new Todo({
    task,
    completed,
  });
  todo
    .save()
    .then(() => res.json(todo))
    .catch((error) => console.log(`${error}`));
};
