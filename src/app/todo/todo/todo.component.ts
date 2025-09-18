import { Component, computed, inject, signal } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule],
  providers: [TodoService],
})
export default class TodoComponent {
  protected todoService = inject(TodoService);

  nbreDeTodos = computed(() => this.todos().length);
  // La liste des todos à afficher
  todos = this.todoService.getTodos();
  // Le todo à ajouter
  todo = signal(new Todo());
  constructor() {}

  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  getFromApis() {
    this.todoService.getTodosFromApi().subscribe({
      next: (todos) => {
        console.log(todos);
      }
    })
  }
}
