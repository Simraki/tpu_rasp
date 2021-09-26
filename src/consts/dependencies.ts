import { TodoViewModel } from '../viewmodels/TodoViewModel'
import RootStore from '../stores/RootStore'
import { TodoStore } from '../stores/TodoStore'

const viewModels = [TodoViewModel]
const stores = [RootStore, TodoStore]

export const dependencies = [...viewModels, ...stores]
