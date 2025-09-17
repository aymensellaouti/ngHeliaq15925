import { computed, inject, Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app-api.config";
import { Observable } from "rxjs";

export interface TodoApi {
  userId: number
  id: number
  title: string
  completed: boolean
}


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);

  http = inject(HttpClient);

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

  getTodosFromApi(): Observable<TodoApi[]> {
    return this.http.get<TodoApi[]>(APP_API.todos);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {
    this.todos.update((todos) =>
      todos.filter((actualTodo) => actualTodo != todo)
    );
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    console.log(this.todos());
  }
}
