import { observer } from 'mobx-react'
import React, { FC } from 'react'
import { TodoViewModel } from './TodoViewModel'
import { Todo } from '../stores/entities/Todo'

interface ISingleTodoViewProps {
    viewModel: TodoViewModel,
    todo: Todo
}


const SingleTodoView: FC<ISingleTodoViewProps> = ({viewModel, todo}) => {

    return (
        <p>
            #{todo.id}
            <strong>{todo.text}</strong>
            <i>{todo.done ? 'DONE!' : ''}</i>

            <br/>

            <input type="checkbox" checked={todo.done} onChange={e => todo.setDone(e.target.checked)}/>
            <input type="text" value={todo.text} onChange={e => todo.setText(e.target.value)}/>
            <button onClick={() => viewModel.remove(todo)}>Delete</button>
        </p>
    )
}


export default observer(SingleTodoView)
