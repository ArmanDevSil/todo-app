import { TodoModel } from '../model/TodoModel.js';
import { TodoView } from '../view/TodoView.js';
export class TodoController {
    form;
    model;
    view;
    inputTodoEl;
    btnAddTodo;
    constructor(form, inputTodoEl, btnAddTodo, model, view) {
        this.form = form;
        this.model = model;
        this.view = view;
        this.inputTodoEl = inputTodoEl;
        this.btnAddTodo = btnAddTodo;
        this.handleAddTodo(this.btnAddTodo);
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        const id = crypto.randomUUID();
        const todoText = this.inputTodoEl.value.trim();
        const newTodo = { todoText: todoText, id: id, completed: false };
        if (!todoText)
            return;
        this.inputTodoEl.value = '';
        this.model.addTodo(newTodo);
        this.render();
    };
    handleAddTodo = (btn) => {
        btn.addEventListener('click', () => {
            this.view.showForm(this.form, this.btnAddTodo);
            this.form.addEventListener('submit', this.handleSubmitForm);
            this.inputTodoEl.focus();
            this.inputTodoEl.addEventListener('blur', () => {
                this.view.hideForm(this.form, this.btnAddTodo);
            });
        });
    };
    handleDelete = (id) => {
        this.model.deleteTodo(id);
        this.render();
    };
    handleEdit = (id, newText) => {
        this.model.editTodo(id, newText);
        this.render();
    };
    handleToggleCompleted = (id) => {
        this.model.toggleCompleted(id);
        this.render();
    };
    render() {
        const todos = this.model.getTodos();
        this.view.renderTodos(todos, this.handleDelete, this.handleEdit, this.handleToggleCompleted);
    }
}
//# sourceMappingURL=TodoController.js.map