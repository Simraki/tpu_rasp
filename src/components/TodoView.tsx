import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { TodoViewModel } from "./TodoViewModel";
import SingleTodoView from "./SingleTodoView";
import { Todo } from "../stores/entities/Todo";

interface ITodoViewProps {
    viewModel: TodoViewModel
}

const TodoView: FC<ITodoViewProps> = ({viewModel}) => {

    return (
        <div>
            <h1>React & MobX Todo List!</h1>
            <p>
                <button onClick={() => viewModel.add()}>New Todo</button>
                {/*<button onClick={() => vm.load()}>Reload Todos</button>*/}
                {/*<button onClick={() => vm.save()}>Save Todos</button>*/}
            </p>
            {viewModel.todos.map((todo: Todo) => {
                return (<SingleTodoView key={todo.id} viewModel={viewModel} todo={todo}/>)
            })}
        </div>
    )
}

export default observer(TodoView)



