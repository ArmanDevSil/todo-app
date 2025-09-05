import { TodoController } from './controller/TodoController.js';
import { TodoView } from './view/TodoView.js';
import { TodoModel } from './model/TodoModel.js';

const frm = document.querySelector('form') as HTMLFormElement;
const inputTodoEl = document.querySelector(
  '.input-todo-el',
) as HTMLInputElement;
const btnAddTodo = document.querySelector(
  '.btn-add-new-todo',
) as HTMLButtonElement;
const listContainer = document.querySelector(
  '.list-container',
) as HTMLUListElement;

const model = new TodoModel();

const view = new TodoView(listContainer);

const controller = new TodoController(
  frm,
  inputTodoEl,
  btnAddTodo,
  model,
  view,
);

window.onload = () => controller.render();
