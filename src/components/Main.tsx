import React from 'react'
import { MobxRouter, startRouter } from '@simraki/mobx-router'
import { inject, InjectorContext, provider } from 'react-ioc'
import RootStore from '../stores/RootStore'
import routes from '../consts/routes'
import { dependencies } from '../consts/dependencies'


class Main extends React.PureComponent {

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

export default provider(...dependencies)(Main)
