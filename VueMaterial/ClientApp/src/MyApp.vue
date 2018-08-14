<template>
  <div>
      <md-toolbar class="md-primary md-dense">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="toggleLeftDrawer" >
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title my-app_title">{{title}}</span>
          <!-- Main menu - top - large screens -->
          <md-tabs md-sync-route class="md-primary my-app_top-main-menu">
            <md-tab v-for="route of routes" :key="route.path" :to="route.path" :md-label="route.title"></md-tab>          
          </md-tabs>
        </div>
        
        <div class="md-toolbar-section-end">                        

          <!-- Main menu - top right - small screens -->
          <md-button v-if="" class="md-icon-button my-app_top-main-menu-btn" @click="toggleRightDrawer">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </md-toolbar>

      <md-drawer :md-active.sync="leftDrawerVisible" class="my-app_drawer">
        <md-toolbar class="md-transparent" md-elevation="0">
          
          <div class="md-toolbar-section-start my-app_mm-title">
            <span>Navigation</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click.native="toggleLeftDrawer">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Test item1</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Test item2</span>
          </md-list-item>
        </md-list>
      </md-drawer>

      <!-- Main menu - right drawer - small screens -->
      <md-drawer :md-active.sync="rightDrawerVisible" class="md-right my-app_right-drawer">
        <md-toolbar class="md-transparent" md-elevation="0">
          <div class="md-toolbar-section-start my-app_mm-title">
            <span>Main menu</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleRightDrawer">
              <md-icon>close</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-list>
          <md-list-item v-for="route of routes" :key="route.path" :to="route.path" class="md-primary my-app_tl">{{route.title}}</md-list-item>
        </md-list>
      </md-drawer>

      <md-content >
        <router-view></router-view>
      </md-content>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { routes } from './router'

export default Vue.extend({
  name: 'MyApp',
  data () {
    return {
      title: 'Examples',
      leftDrawerVisible: false,
      rightDrawerVisible: false,
      routes: routes
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerVisible = !this.leftDrawerVisible
    },
    toggleRightDrawer () {
      this.rightDrawerVisible = !this.rightDrawerVisible
    }
  },
  components: {
  }
})
</script>

<style lang="scss">
/* Main menu */
.my-app_top-main-menu {
  display: none;  /* Do not show top menu on mobile */
}
@media only screen and (min-width: 768px) {
  .my-app_top-main-menu {   
    display: flex;
  }
  .my-app_top-main-menu-btn{
    display: none;
  }
}

.my-app_drawer {
  width: 270px;
  /* width - 25px (ie11+)*/
  max-width: calc(100vw - 25px);
}

.my-app_right-drawer {
  width: 180px;
  /* width - 25px (ie11+)*/
  max-width: calc(100vw - 15px);
}
.my-app_mm-title{
  padding-left: 8px;
}
.my-app_tl{
  min-width: 0;
}
</style>
