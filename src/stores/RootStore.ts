/**
 * Import all your stores
 */
// import { AuthStore } from './AuthStore';
import { TodoStore } from "./TodoStore";

/**
 * Root Store Class with
 */
export default class RootStore {
    // authStore: AuthStore;
    // userStore: UserStore;
    todoStore: TodoStore;

    constructor() {
        // this.authStore = new AuthStore();
        // this.userStore = new UserStore(this);
        this.todoStore = new TodoStore();
    }
}
