import React, { FC } from 'react'
import { observer } from 'mobx-react'
import routes from '../consts/routes'
import { Link } from '@simraki/mobx-router'
import { useInstance } from 'react-ioc'
import RootStore from '../stores/RootStore'
import { Button, ConfigProvider } from 'antd'


const App: FC = () => {

    const store = useInstance(RootStore)

    function handle(): void {

        ConfigProvider.config({
            theme: {
                primaryColor: '#9a0c44',
            },
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <div>with
                    {'router.appendPathList(\'user/:name\')'}
                </div>
                <div>
                    <div><Button onClick={handle}> go home</Button></div>
                    <div><Button onClick={() => store.router.goTo(routes.scheduler)}> go scheduler</Button></div>
                    <Link router={store.router} route={routes.todos}> Go to todos </Link>
                    <p>Current pathname: {location.pathname}</p>
                </div>
            </header>
        </div>
    )
}


export default observer(App)
