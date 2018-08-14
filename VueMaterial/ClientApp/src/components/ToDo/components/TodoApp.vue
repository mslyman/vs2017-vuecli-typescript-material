<template>
  <div class="todo-app">
    <md-card>
      <md-card-header>
        <div class="md-title">Todo</div>
      </md-card-header>
      <md-card-content>
        <md-field>
          <md-input v-model="newTodoTitle" @keyup.enter.native="createTodo()" placeholder="What needs to be done?"></md-input>
        </md-field>
        <md-list v-if="todos.length">
          <!-- List items -->
          <todo-item v-for="todo of todosInView" :key="todo.id" :todo="todo" @removeSelf="removeTodo($event)" /> 
        </md-list>
        
             
      </md-card-content>

      <md-card-actions>
       <todo-footer v-if="todos.length" :filterType="filterType" @filterChange="filterChange" /> 
      </md-card-actions>

    </md-card>
  </div>
</template>

<script lang="ts">

import TodoFooter from './TodoFooter.vue';
import TodoHeader from './TodoHeader.vue';
import TodoItem from './TodoItem.vue';

import Vue from 'vue';
import { AppState, FilterType } from '../models';
import { Store, Todo } from '../store';
var lastId = 100;

export default Vue.extend({
  components: {
    TodoItem,
    TodoFooter,
  },
  props: [],
  data() {
    const initialState = { //: AppState
      newTodoTitle: '',
      filterType: FilterType.All,
      notification: true,
      sharedState: Store.state
    };
    return initialState;
  },
  methods: {
    click1(e: any, q: any){
      console.log(e, q)
      //$event.stopPropagation();
    },
    btnDeleteClick(){
      console.log('del');
    },
    createTodo() {
      const title = this.newTodoTitle.trim();
      if (!title) {
        return;
      }
      var item: Todo = {
        id: ++lastId,
        completed: false,
        title,
      };
      Store.addTodo(item);
      this.newTodoTitle = '';
      console.log('added item #', lastId)
    },
    // completeAll(){
    //   Store.completeAll();
    // },
    removeTodo(id: number) {
      console.log(`deleting #${id}`)
      Store.removeTodo(id);
    },
    clearCompleted() {
      this.todos = this.remaining;
    },
    filterChange(filterType: FilterType) {
      this.filterType = filterType;
    }
  },
  computed: {
    todos(): Todo[] {
      return this.sharedState.todos
    },
    todosInView(): Todo[] {
      switch (this.filterType) {
        case FilterType.Completed:
          return this.completed;
        case FilterType.Active:
          return this.remaining;        
        default:
          return this.todos;
      }
    },
    completed(): Todo[] {
      return this.todos.filter(todo => todo.completed);
    },
    remaining(): Todo[] {
      return this.todos.filter(todo => !todo.completed);
    },
  },
});
</script>

<style lang="scss">
.todo-app {
  padding: 30px 15px 0 15px;
  text-align: center;
  // .md-card-content:last-of-type {
  //   padding-bottom: 0px;
  // }
  .md-card {
    display: block;
  }
  @media only screen and (min-width: 768px) {
    .md-card {
      display: inline-block;
      width: 600px;
    }
  }
}


</style>