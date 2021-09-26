import { Todo } from '../stores/entities/Todo'
import { inject } from 'react-ioc'
import { TodoStore } from '../stores/TodoStore'


export class TodoViewModel {

    private todoStore = inject<TodoStore>(this, TodoStore)

    get todos(): Todo[] {
        return this.todoStore.todoList
    }

    add(): Todo {
        return this.todoStore.add()
    }

    remove(todo: Todo): void {
        this.todoStore.remove(todo)
    }
}
