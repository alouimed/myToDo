import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todoModel/todoModel';

@Pipe({
  name: 'doneToBottom'
})
export class DoneToBottomPipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    const doneTodos = todos.filter(todo => todo.state);
    const notDoneTodos = todos.filter(todo => !todo.state);
   // return [...doneTodos, ...notDoneTodos];
   return [...notDoneTodos, ...doneTodos];
  }

}
