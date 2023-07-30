import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModuleMyTodoRoutingModule } from './module-my-todo-routing.module';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DoneToBottomPipe } from './pipes/done-to-bottom.pipe';



@NgModule({
  declarations: [
    TodoListComponent,
    DetailTodoComponent,
    UpdateTodoComponent,
    PaginationComponent,
    AddTodoComponent,
    DoneToBottomPipe
  ],
  imports: [
    CommonModule,
    ModuleMyTodoRoutingModule
  ]
})
export class ModuleMyTodoModule { }
