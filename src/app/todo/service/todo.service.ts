import { Injectable, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = signal<Todo[]>([]);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): WritableSignal<Todo[]> {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {}

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    return false;
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {}
}
