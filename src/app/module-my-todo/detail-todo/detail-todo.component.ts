import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todoModel/todoModel';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  todo: Todo|undefined;

  constructor( private route: ActivatedRoute, private todoService: TodoService ) {}

  ngOnInit(): void {
    this.getTodoDetails();
  }

  getTodoDetails(): void {
    const id$ = this.route.snapshot.paramMap.get('id');
    if(id$==null){
      return;
    }
    const id = Number(id$);
    this.todoService.getTodoById(id).subscribe((todo) => {
      this.todo = todo;
    });
  }
}