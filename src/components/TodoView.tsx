import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { TodoViewModel } from '../viewmodels/TodoViewModel'
import SingleTodoView from './SingleTodoView'
import { Todo } from '../stores/entities/Todo'
import routes from '../consts/routes'
import { useInstance } from 'react-ioc'
import RootStore from '../stores/RootStore'
import { Button } from 'antd'


const TodoView: FC = () => {

    const viewModel = useInstance(TodoViewModel)
    const store = useInstance(RootStore)

    return (
        <div>
            <h1>React & MobX Todo List!</h1>
            <Button block onClick={() => store.router.goTo(routes.home)}> go home</Button>
            <p>Current pathname: {store.router.currentPath}</p>
            <Button onClick={() => viewModel.add()}>New Todo</Button>
            {viewModel.todos.map((todo: Todo) => {
                return (<SingleTodoView key={todo.id} viewModel={viewModel} todo={todo}/>)
            })}
        </div>
    )
}

export default observer(TodoView)



