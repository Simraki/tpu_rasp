import { action, computed, makeObservable, observable, reaction } from "mobx";
import { Todo } from "./entities/Todo";

// export type Todo = {
//     task: string
//     isComplete: boolean
// }

export class TodoStore {
    todoList: Todo[] = []

    constructor() {
        makeObservable(this, {
            todoList: observable,
            completedTasks: computed,
            add: action,
            remove: action
        })
        reaction(
            () => this.todoList.filter(todo => !todo.done),
            uncompletedTasks => {
                if (uncompletedTasks.length > 5) {
                    alert("Dude. You've got too much on your plate.")
                }
            }
        )
    }

    get completedTasks(): number {
        return this.todoList.filter(todo => todo.done).length
    }

    add(): Todo {
        const newTodo = new Todo()
        this.todoList.push(newTodo)
        return newTodo
    }

    remove(todo: Todo): void {
        const index = this.todoList.indexOf(todo)
        if (index > -1) {
            this.todoList.splice(index, 1)
        }
    }
}
