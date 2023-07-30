import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ModuleMyTodoModule } from './module-my-todo/module-my-todo.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    ModuleMyTodoModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
