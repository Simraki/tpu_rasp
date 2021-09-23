import { types } from "mobx-state-tree";
import { ITodo, Todo } from "./TodoMST";


const TodoStore = types
    .model("TodoStore", {
        todos: types.optional(types.array(Todo), [])
    })
    .actions(self => ({
        add(): ITodo {
            const newTodo = Todo.create()
            self.todos.push(newTodo)
            return newTodo
        },
        remove(todo: ITodo): void {
            const index = self.todos.indexOf(todo)
            if (index > -1) {
                self.todos.splice(index, 1)
            }
        }
    }))

export const todoStore = TodoStore.create()
