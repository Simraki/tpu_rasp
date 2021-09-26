import React from 'react'
import { MobxRouter, startRouter } from '@simraki/mobx-router'
import { inject, InjectorContext, provider } from 'react-ioc'
import RootStore from '../stores/RootStore'
import routes from '../consts/routes'
import { TodoViewModel } from './TodoViewModel'
import { TodoStore } from '../stores/TodoStore'


class Main extends React.Component {

    static contextType = InjectorContext
    private store = inject<RootStore>(this, RootStore)

    render() {
        startRouter(routes, this.store)
        return (
            <React.StrictMode>
                <MobxRouter store={this.store}/>
            </React.StrictMode>)
    }
}

export default provider(RootStore, TodoStore, TodoViewModel)(Main)
