import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../module-my-todo/todoModel/todoModel';
import { MOCK_TODOS } from '../module-my-todo/mockData/dataTodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  numberToDo!:number;

  constructor() { }
  
  getTodos(): Observable<Todo[]> {
    return of(MOCK_TODOS);
  }

}
