import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Todo } from '../todoModel/todoModel';
import { MOCK_TODOS } from '../mockData/dataTodo';
import { DoneToBottomPipe } from '../pipes/done-to-bottom.pipe';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  constructor() {
    this.todos = new DoneToBottomPipe().transform(MOCK_TODOS);
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  updateTodoState(todoId: number, state: boolean): Observable<Todo> {
    const todo = this.todos.find(todo => todo.id === todoId);
    if (todo) {
      todo.state = state;
      return of(todo); // Retourner le todo mis à jour comme observable
    }
    return throwError(new Error('Todo not found.'));
  }

  getTodoById(todoId: number): Observable<Todo> {
    const todo = this.todos.find(todo => todo.id === todoId);
    if (todo) {
      return of(todo);
    }
    return throwError(new Error('Todo not found.'));
  }

}
