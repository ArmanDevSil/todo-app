import { TodoModel } from '../model/TodoModel.js';
import type { Todo } from '../types/Todo.js';
import { TodoView } from '../view/TodoView.js';

export class TodoController {
  private form: HTMLFormElement;
  private model: TodoModel;
  private view: TodoView;
  private inputTodoEl: HTMLInputElement;
  private btnAddTodo: HTMLButtonElement;

  constructor(
    form: HTMLFormElement,
    inputTodoEl: HTMLInputElement,
    btnAddTodo: HTMLButtonElement,
    model: TodoModel,
    view: TodoView,
  ) {
    this.form = form;
    this.model = model;
    this.view = view;
    this.inputTodoEl = inputTodoEl;
    this.btnAddTodo = btnAddTodo;

    this.handleAddTodo(this.btnAddTodo);
  }

  private handleSubmitForm = (e: SubmitEvent): void => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const todoText: string = this.inputTodoEl.value.trim();
    const newTodo: Todo = { todoText: todoText, id: id, completed: false };
    if (!todoText) return;

    this.inputTodoEl.value = '';

    this.model.addTodo(newTodo);
    this.render();
  };

  private handleAddTodo = (btn: HTMLButtonElement) => {
    btn.addEventListener('click', () => {
      this.view.showForm(this.form, this.btnAddTodo);

      this.form.addEventListener('submit', this.handleSubmitForm);

      this.inputTodoEl.focus();

      this.inputTodoEl.addEventListener('blur', () => {
        this.view.hideForm(this.form, this.btnAddTodo);
      });
    });
  };

  private handleDelete = (id: string): void => {
    this.model.deleteTodo(id);
    this.render();
  };

  private handleEdit = (id: string, newText: string): void => {
    this.model.editTodo(id, newText);
    this.render();
  };

  private handleToggleCompleted = (id: string): void => {
    this.model.toggleCompleted(id);
    this.render();
  };

  render(): void {
    const todos: Todo[] = this.model.getTodos();
    this.view.renderTodos(
      todos,
      this.handleDelete,
      this.handleEdit,
      this.handleToggleCompleted,
    );
  }
}
