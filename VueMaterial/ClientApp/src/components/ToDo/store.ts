import Vue from "vue";

//export type FilterType = 'all' | 'completed' | 'active';

export interface Todo {
    id: number,
    title: string;
    completed: boolean;
}

export interface ISharedState {
    todos: Todo[];
}

export interface IStore {
    state: ISharedState;
    // change item
    addTodo: (item: Todo) => void;
    removeTodo: (id: number) => void;
    toggleCompleted: (id: number) => void;
    // change items
    completeAll: () => void;
    deleteCompleted: () => void;
    // helper function
    indexById: (id: number) => number;
    // shared filter type
    
}

var store: IStore = {
    state: {
        todos: []
    },
    // change item
    addTodo(item: Todo) {
        this.state.todos.push(item);
    },
    removeTodo(id: number) {
        var idx = this.indexById(id);
        if (idx >= 0){
            this.state.todos.splice(idx, 1);
        }
    },
    toggleCompleted(id: number) {
        var f = this.state.todos.filter(todo => todo.id === id);
        if (f.length) {
            var item = f[0];
            var idx = this.state.todos.indexOf(item);
            item.completed = !item.completed;
            this.state.todos.splice(idx, 1, item);
        }
    },

    // change items
    completeAll() {
        for (var item of this.state.todos){
            if (!item.completed){
                item.completed = true;
            } 
        }
    },
    deleteCompleted() {
         this.state.todos = this.state.todos.filter(todo => !todo.completed);
    },

    indexById(id: number) {
        var f = this.state.todos.filter(todo => todo.id === id);
        if (f.length) {
            return this.state.todos.indexOf(f[0]);
        }
        else {
            return -1;
        }
    }

    
}

export { store as Store };