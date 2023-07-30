// module-my-todo-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: TodoListComponent },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: DetailTodoComponent }
];

@NgModule({
    //declarations: [AddTodoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleMyTodoRoutingModule { }
