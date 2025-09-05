import { createElement } from '../utils/createElement.js';
import { appendChildren } from '../utils/appendChildren.js';
import { prependChildren } from '../utils/prependChildren.js';
export class TodoView {
    listContainer;
    constructor(listContainer) {
        this.listContainer = listContainer;
    }
    showForm(form, btn) {
        form.classList.remove('hidden');
        btn.parentElement?.classList.add('hidden');
    }
    hideForm(form, btn) {
        form.classList.add('hidden');
        btn.parentElement?.classList.remove('hidden');
    }
    renderTodos(todos, onDelete, onEdit, onToggleCompleted) {
        this.listContainer.innerHTML = '';
        todos.forEach(todo => {
            const li = createElement('li', {
                id: todo.id,
                classes: ['flex', 'flex--space-between'],
            });
            const markComplete = createElement('input', {
                type: 'checkbox',
                classes: ['mark-complete', 'checkbox-todo', 'flex', 'flex--centered'],
                id: todo.id,
            });
            markComplete.addEventListener('change', () => {
                onToggleCompleted(todo.id);
            });
            markComplete.checked = todo.completed;
            li.classList.toggle('completed', markComplete.checked);
            const btnDelete = createElement('button', {
                html: '<i class="fa fa-solid fa-trash"></i>',
                id: todo.id,
                classes: ['btn', 'btn-delete-todo'],
            });
            btnDelete.addEventListener('click', () => {
                this.renderDeleteForm(li, todo, onDelete, onEdit);
            });
            const btnEdit = createElement('button', {
                html: '<i class="fa-solid fa-pen-to-square"></i>',
                id: todo.id,
                classes: ['btn', 'btn-edit-todo'],
            });
            btnEdit.addEventListener('click', () => this.renderEditForm(li, todo, onEdit));
            const btnContainer = createElement('div', {
                html: [btnEdit, btnDelete],
                classes: ['container', 'btn-container', 'flex', 'flex--space-between'],
            });
            const spanTodoText = createElement('span', {
                text: todo.todoText,
                id: todo.id,
            });
            appendChildren(this.listContainer, li);
            prependChildren(li, markComplete);
            appendChildren(li, spanTodoText, btnContainer);
        });
    }
    renderEditForm(li, todo, onEdit) {
        const editTodoFormClass = 'edit-todo-form';
        const getNewTodoText = (inputEl) => inputEl.value.trim();
        const handleEditConfirm = (newText) => {
            li.classList.remove(editTodoFormClass);
            onEdit(todo.id, newText);
        };
        const handleEditCancel = () => {
            li.classList.remove(editTodoFormClass);
            onEdit(todo.id, todo.todoText);
        };
        const handleKeyDown = (e) => {
            const newTodoText = getNewTodoText(inputEditTodo);
            if (e.key === 'Enter' && newTodoText) {
                handleEditConfirm(newTodoText);
                return;
            }
            if (e.key === 'Escape') {
                handleEditCancel();
                return;
            }
        };
        const inputEditTodo = createElement('input', {
            type: 'text',
            id: todo.id,
        });
        inputEditTodo.addEventListener('blur', () => {
            const newTodoText = getNewTodoText(inputEditTodo);
            newTodoText ? handleEditConfirm(newTodoText) : handleEditCancel();
        });
        const btnConfirmEdit = createElement('button', {
            html: '<i class="fa-solid fa-circle-check"></i>',
            id: todo.id,
            classes: ['btn', 'btn-confirm-edit'],
        });
        btnConfirmEdit.addEventListener('click', () => {
            const newTodoText = getNewTodoText(inputEditTodo);
            newTodoText ? handleEditConfirm(newTodoText) : handleEditCancel();
        });
        const btnCancelEdit = createElement('button', {
            html: '<i class="fa-solid fa-xmark"></i>',
            id: todo.id,
            classes: ['btn', 'btn-cancel-edit'],
        });
        btnCancelEdit.addEventListener('click', handleEditCancel);
        inputEditTodo.value = todo.todoText;
        li.textContent = '';
        const btnContainer = createElement('div', {
            html: [btnConfirmEdit, btnCancelEdit],
            classes: ['container', 'btn-container', 'flex', 'flex--space-between'],
        });
        li.classList.add(editTodoFormClass);
        appendChildren(li, inputEditTodo, btnContainer);
        inputEditTodo.focus();
        inputEditTodo.addEventListener('keydown', handleKeyDown);
    }
    renderDeleteForm(li, todo, onDelete, onEdit) {
        const todoDeleteText = "Are you want to delete? There's no way back";
        li.innerHTML = '';
        const btnConfirmDelete = createElement('button', {
            text: 'Yes, I Want To Delete',
            id: todo.id,
            classes: ['btn', 'btn-confirm-delete'],
        });
        btnConfirmDelete.addEventListener('click', () => onDelete(todo.id));
        const btnCancelDelete = createElement('button', {
            text: 'No, cancel!',
            id: todo.id,
            classes: ['btn', 'btn-cancel-delete'],
        });
        btnCancelDelete.addEventListener('click', () => onEdit(todo.id, todo.todoText));
        li.textContent = todoDeleteText;
        appendChildren(li, btnConfirmDelete, btnCancelDelete);
    }
}
//# sourceMappingURL=TodoView.js.map