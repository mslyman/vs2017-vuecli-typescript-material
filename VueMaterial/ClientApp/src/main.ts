import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueRouter)
Vue.use(<any>VueMaterial)

Vue.config.productionTip = false

import Login from './components/Login.vue'
import MyApp from './MyApp.vue'
import { router } from './router'

/* eslint-disable no-new */
var v = new Vue({
  el: '#app',
  router,
  components: { MyApp },
  render: h => h(MyApp)
});
(<any>v)['$material'].locale.firstDayOfAWeek = 1







//import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
//import 'vue-material/dist/vue-material.min.css'

//Vue.use(MdButton)
//Vue.use(MdContent)
//Vue.use(MdTabs)