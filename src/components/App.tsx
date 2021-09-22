import React from 'react'
import TodoView from "./TodoView";
import { TodoViewModel } from "./TodoViewModel";

const App = (): JSX.Element => {
    return (
        <div className="container">
            <TodoView viewModel={new TodoViewModel()}/>
        </div>
    )
}

export default App
