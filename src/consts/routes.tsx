import React from 'react'
import TodoView from '../components/TodoView'
import RootStore from '../stores/RootStore'
import App from '../components/App'
import { Route } from '@simraki/mobx-router'


const routes = {
    home: new Route<RootStore>({
        path: '/',
        component: <App/>,
    }),
    todos: new Route<RootStore>({
        path: '/todos',
        component: <TodoView/>,
    }),
}
export default routes
