import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Todo } from '../todoModel/todoModel';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$ !: Observable<Todo[]>;
  paginatedTodos$!: Observable<Todo[]>;
  currentPage = 1;
  itemsPerPage = 5;
  totalPages!: number;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    // Charger les todos depuis le service, puis appliquer la pagination
    this.todos$ = this.todoService.getTodos();
    this.paginatedTodos$ = this.todos$.pipe(
      map(todos => {
        this.totalPages = Math.ceil(todos.length / this.itemsPerPage);
        return todos.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
      })
    );
  }
 
  onPageChange(page: number) {
    this.currentPage = page;
    this.loadTodos(); // Recharger les todos pour afficher la page demandée
 
  }

}
