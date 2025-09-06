import { TodoModel } from '../model/TodoModel.js';
import { TodoView } from '../view/TodoView.js';
export declare class TodoController {
    private form;
    private model;
    private view;
    private inputTodoEl;
    private btnAddTodo;
    constructor(form: HTMLFormElement, inputTodoEl: HTMLInputElement, btnAddTodo: HTMLButtonElement, model: TodoModel, view: TodoView);
    private handleSubmitForm;
    private handleAddTodo;
    private handleDelete;
    private handleEdit;
    private handleToggleCompleted;
    render(): void;
}
//# sourceMappingURL=TodoController.d.ts.map