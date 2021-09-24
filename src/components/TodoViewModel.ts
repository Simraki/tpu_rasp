import RootStore from "../stores/RootStore";
import { TodoStore } from "../stores/TodoStore";
import { Todo } from "../stores/entities/Todo";


export class TodoViewModel {

    todoStore: TodoStore = new RootStore().todoStore;

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
