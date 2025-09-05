import type { Todo } from '../types/Todo.js';

export class TodoModel {
  private todos: Todo[] = this.getLocalStorage();

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveLocalStorage();
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveLocalStorage();
  }

  editTodo(id: string, newText: string): void {
    const todoToEdit = this.todos.find(todo => todo.id === id);
    if (todoToEdit) {
      todoToEdit.todoText = newText;
      this.saveLocalStorage();
    }
  }

  toggleCompleted(id: string): void {
    const completedTodo = this.todos.find(todo => todo.id === id);
    if (completedTodo) {
      completedTodo.completed = !completedTodo.completed;
      this.saveLocalStorage();
    }
  }

  private saveLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getLocalStorage(): Todo[] {
    const storedTodos = localStorage.getItem('todos');
    if (!storedTodos) return [];
    try {
      return JSON.parse(storedTodos) as Todo[];
    } catch {
      return [];
    }
  }
}
