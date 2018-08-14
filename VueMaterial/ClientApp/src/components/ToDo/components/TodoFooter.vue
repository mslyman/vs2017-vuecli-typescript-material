<template>
  <div class="todo-footer md-layout">
    <div class="md-layout-item todo-footer_lbtns">
      <md-field>
        <label for="filter">Filter</label>
        <md-select v-model="filter" name="filter" id="filter">
          <md-option value="0">All</md-option>
          <md-option value="1">Completed</md-option>
          <md-option value="2">Active</md-option>
        </md-select>
      </md-field>
    </div>
    <div class="md-layout-item todo-footer_rbtns">
      <md-button @click.prevent="completeAll()" class="md-raised">Complete all</md-button>
      <md-button @click.prevent="deleteCompletedClick()" class="md-raised">Delete completed</md-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Store } from "../store";
import { FilterType } from "../models";

export default Vue.extend({
  props: {
    filterType: Number
  },
  data() {
    return {
      filter: 0,
      sharedState: Store.state
    };
  },
  watch: {
    filter(newValue, oldValue) {
      if (this.filterType != newValue) {
        console.log(newValue);
        console.log(typeof newValue);
        var i: number = parseInt(newValue);
        this.$emit("filterChange", i);
      }
    }
  },
  computed: {
    itemsLeft(): number {
      return Store.state.todos.filter(todo => !todo.completed).length;
    },
    itemSingularOrPlural(): string {
      return this.itemsLeft === 1 ? "item" : "items";
    },
    isActive(): boolean {
      return this.filterType === FilterType.Active;
    },
    isCompleted(): boolean {
      return this.filterType === FilterType.Completed;
    }
  },
  created() {
    this.filter = this.filterType;
  },
  methods: {
    completeAll() {
      Store.completeAll();
    },
    deleteCompletedClick() {
      Store.deleteCompleted();
    }
  }
});
</script>

<style lang="scss">
.todo-footer {
  width: 100%;
  padding-left:8px;
  padding-right:8px;
  justify-content: space-between;
  align-items: center;
}
.todo-footer_lbtns {
  max-width: 150px;
}
.todo-footer_rbtns {
  display: flex;
  justify-content: flex-end;
  .md-button:last-child {
    margin-right: 0;
  }
  .md-button + .md-button {
    margin-left: 8px;
  }
}
</style>
