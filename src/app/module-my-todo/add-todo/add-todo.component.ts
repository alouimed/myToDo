import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todoModel/todoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  newTodoTitle: string = '';
  newTodoDescription: string = '';
  titleEmpty: boolean = false;
  
  constructor(private todoService: TodoService, private router: Router) { }

  addNewTodo(): void {
  if (this.newTodoTitle.trim() === '') {
   this.titleEmpty=true;
    return;
  }

  const newTodo: Todo = {
    id: this.todoService.todos.length + 1, // a new ID 
    title: this.newTodoTitle,
    description: this.newTodoDescription,
    state: false, //  (not done)
  };
  // Add  new todo to the top of the todos list
  this.todoService.todos.unshift(newTodo);
  this.router.navigate(['/todos']);
  this.titleEmpty = false;
}


}
