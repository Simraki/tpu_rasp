import { Instance, types } from 'mobx-state-tree'

let _nextId = 0

function nextId(): number {
    _nextId++;
    return _nextId
}

export const Todo = types
    .model("Todo", {
        id: types.optional(types.identifierNumber, () => nextId()),
        text: '',
        done: false
    })
    .actions((todo) => ({
        setDone(b: boolean): void {
            todo.done = b
        },
        setText(str: string): void {
            todo.text = str
        }
    }))
    .views((todo) => ({
        get isValid(): boolean {
            return todo.text !== ''
        }
    }))

export type ITodo = Instance<typeof Todo>
// export interface ITodo extends Instance<typeof Todo> {}

// interface ITodoSnapshotIn extends SnapshotIn<typeof Todo> {} // => { title?: string }
// interface ITodoSnapshotOut extends SnapshotOut<typeof Todo> {} // => { title: string }
