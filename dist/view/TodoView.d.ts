import type { Todo } from '../types/Todo.js';
export declare class TodoView {
    private listContainer;
    constructor(listContainer: HTMLUListElement);
    showForm(form: HTMLFormElement, btn: HTMLButtonElement): void;
    hideForm(form: HTMLFormElement, btn: HTMLButtonElement): void;
    renderTodos(todos: Todo[], onDelete: (id: string) => void, onEdit: (id: string, newText: string) => void, onToggleCompleted: (id: string) => void): void;
    private renderEditForm;
    private renderDeleteForm;
}
//# sourceMappingURL=TodoView.d.ts.map