import { TodoController } from './controller/TodoController.js';
import { TodoView } from './view/TodoView.js';
import { TodoModel } from './model/TodoModel.js';
const frm = document.querySelector('form');
const inputTodoEl = document.querySelector('.input-todo-el');
const btnAddTodo = document.querySelector('.btn-add-new-todo');
const listContainer = document.querySelector('.list-container');
const model = new TodoModel();
const view = new TodoView(listContainer);
const controller = new TodoController(frm, inputTodoEl, btnAddTodo, model, view);
window.onload = () => controller.render();
//# sourceMappingURL=main.js.map