export class TodoModel {
    todos = this.getLocalStorage();
    constructor() { }
    getTodos() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
        this.saveLocalStorage();
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveLocalStorage();
    }
    editTodo(id, newText) {
        const todoToEdit = this.todos.find(todo => todo.id === id);
        if (todoToEdit) {
            todoToEdit.todoText = newText;
            this.saveLocalStorage();
        }
    }
    toggleCompleted(id) {
        const completedTodo = this.todos.find(todo => todo.id === id);
        if (completedTodo) {
            completedTodo.completed = !completedTodo.completed;
            this.saveLocalStorage();
        }
    }
    saveLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    getLocalStorage() {
        const storedTodos = localStorage.getItem('todos');
        if (!storedTodos)
            return [];
        try {
            return JSON.parse(storedTodos);
        }
        catch {
            return [];
        }
    }
}
//# sourceMappingURL=TodoModel.js.map