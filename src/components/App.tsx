import React from 'react'
import { observer } from 'mobx-react'
import routes from '../consts/routes'
// import { store } from '../stores/RootStore'
import { Link } from '@simraki/mobx-router'
import { useInstance } from 'react-ioc'
import RootStore from '../stores/RootStore'


const App = (): JSX.Element => {

    const store = useInstance(RootStore)

    function handle(): void {
        store.app.setUser('101')
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>with
                    {'router.appendPathList(\'user/:name\')'}
                </div>
                <div>
                    <button onClick={handle}> go home</button>
                    <Link router={store.router} route={routes.todos}> Go to todos </Link>
                    <p>Current pathname: {location.pathname}</p>
                </div>
            </header>
        </div>
    )
}


export default observer(App)
