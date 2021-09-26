import { action, computed, makeObservable, observable } from 'mobx'

let _nextId = 0

function nextId(): number {
    _nextId++
    return _nextId
}

export class Todo {

    id = nextId()
    text = ''
    done = false

    constructor() {
        makeObservable(this, {
            text: observable,
            done: observable,
            isValid: computed,
            setDone: action,
            setText: action,
        })
    }

    get isValid(): boolean {
        return this.text !== ''
    }

    setDone(b: boolean): void {
        this.done = b
    }

    setText(str: string): void {
        this.text = str
    }

}
