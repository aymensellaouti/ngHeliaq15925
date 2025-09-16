import { computed, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.todos.asReadonly();
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    //this.todos().push(todo);
    this.todos.update((todos) => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {
    this.todos.update(
      todos => todos.filter(
        actualTodo => actualTodo != todo
      )
    )
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    console.log(this.todos());
  }
}
