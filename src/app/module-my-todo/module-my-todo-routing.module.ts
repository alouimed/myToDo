// module-my-todo-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: TodoListComponent },
  { path: 'todo/add', component: AddTodoComponent },
  { path: ':id', component: DetailTodoComponent },
  { path: ':id/update', component: UpdateTodoComponent },
];

@NgModule({
    //declarations: [AddTodoComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleMyTodoRoutingModule { }
