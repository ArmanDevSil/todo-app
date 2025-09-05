import type { Todo } from '../types/Todo.js';
export declare class TodoModel {
    private todos;
    constructor();
    getTodos(): Todo[];
    addTodo(todo: Todo): void;
    deleteTodo(id: string): void;
    editTodo(id: string, newText: string): void;
    toggleCompleted(id: string): void;
    private saveLocalStorage;
    getLocalStorage(): Todo[];
}
//# sourceMappingURL=TodoModel.d.ts.map