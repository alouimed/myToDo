import { Component, OnInit } from '@angular/core';
import { Todo } from '../todoModel/todoModel';
import { TodoService } from 'src/app/module-my-todo/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  totalPages!: number;
  todos: Todo[] = [];
  currentPage = 1;
  itemsPerPage = 5;
  paginatedTodos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.totalPages = Math.ceil(this.todos.length / this.itemsPerPage);
      this.paginateTodos();
    });
 }

  paginateTodos() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedTodos = this.todos.slice(startIndex, endIndex);
  }
 
  onPageChange(page: number) {
    this.currentPage = page;
    this.paginateTodos(); // Recharger les todos pour afficher la page demandée
  }
  onTodoStateChange(todo: Todo) {
    todo.state = !todo.state;
    this.todoService.updateTodoState(todo.id, todo.state).subscribe(() => {
      if (todo.state) {
        this.todos = this.todos.filter(t => t.id !== todo.id);
        this.todos.push(todo);
 }
      this.paginateTodos();
    });
  }
}
