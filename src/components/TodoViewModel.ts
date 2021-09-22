import { action, makeObservable, observable } from 'mobx'
import { Todo } from '../entities/Todo'


export class TodoViewModel {

    constructor() {
        makeObservable(this, {
            todos: observable,
            add: action,
            remove:action
        })
    }

    todos: Todo[] = []

    add(): Todo {
        const newTodo = new Todo()
        this.todos.push(newTodo)
        return newTodo
    }


    remove(todo: Todo): void {
        const index = this.todos.indexOf(todo)
        if (index > -1) {
            this.todos.splice(index, 1)
        }
    }

    // @action
    // load(): void {
    //     // if the browser has support for localStorage, try to retrieve the saved todos
    //     if (window.localStorage) {
    //         // const json = JSON.parse(window.localStorage.getItem("todos") || "[]")
    //
    //         // Notice: the todo => Todo.deserialize(todo) is an ES2015 arrow function
    //         // this.todos = json.map(todo => Todo.deserialize(todo))
    //     }
    // }

    // @action
    // save(): void {
    //     // are there invalid todos?
    //     if (this.todos.filter(todo => !todo.isValid).length > 0) {
    //         alert("Unable to save: There are invalid Todos.")
    //     }
    //
    //     if (window.localStorage) {
    //         // window.localStorage.setItem(
    //         //     "todos",
    //         //     JSON.stringify(
    //         //         this.todos.map(todo => todo.serialize())
    //         //     )
    //         // )
    //     }
    // }
}
