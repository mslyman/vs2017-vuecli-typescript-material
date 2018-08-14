import Vue from 'vue'
import VueRouter from 'vue-router'
import RegularControls from '../components/RegularControls.vue'
import Todo from '../components/ToDo/components/TodoApp.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    title: 'Todo',
    component: Todo
  },
  {
    path: '/login',
    name: 'Login',
    title: 'Login',
    component: Login,
  },
  {
    path: '/controls',
    name: 'RegularControls',
    title: 'Controls',
    component: RegularControls
  }
];

const router = new VueRouter({ routes });

export { routes, router }