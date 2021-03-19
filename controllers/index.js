const Todo = require("../data/todos");
let todosArray = Todo.todos;

function index(req, res) {
  res.render("index", { todos: todosArray });
}

function createTodo(req, res) {
  req.body.done = false;
  todosArray.push(req.body);
  res.redirect("/");
}
module.exports = {
  index,
  create: createTodo,
};
