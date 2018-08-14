<template>  
  <md-list-item :class="{ completed: todo.completed }" class="todo-item">
    <span >{{todo.title}}</span>
    <md-switch v-model="todo.completed" class="md-primary"/>
  </md-list-item>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["todo"],
  data() {
    return {};
  },
  methods: {
    destroy() {
      console.log(this.todo.id)
      this.$emit('removeSelf', this.todo.id);
    }
  }
});
</script>

<style lang="scss">
  .todo-item.completed span {
    color: green !important;
  }
</style>