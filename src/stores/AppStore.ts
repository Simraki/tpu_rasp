import { action, makeObservable, observable } from 'mobx'

class AppStore {
    public title?: string = 'MobX Router Tutorial'
    public user?: string = undefined

    constructor() {

        makeObservable(this, {
            title: observable,
            user: observable,
            setTitle: action,
            setUser: action,
        })
    }

    setTitle(title: string | undefined): void {
        this.title = title
    }

    setUser(user: string): void {
        this.user = user
    }
}

export default AppStore
