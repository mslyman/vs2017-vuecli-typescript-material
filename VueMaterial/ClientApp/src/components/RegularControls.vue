<template>
  <div class="regular-controls">
    <md-card class="regular-controls_card">
      <md-card-header>
        <div class="md-title">Regular controls</div>
      </md-card-header>

      <md-card-content>

        <md-field md-clearable>
          <label>Driver name</label>
          <md-input v-model="driverName"></md-input>
        </md-field>

        <md-datepicker v-model="dateStart" md-immediately ref="dpDateStart">
          <label>Date start</label>
        </md-datepicker>

        <md-datepicker v-model="dateEnd" ref="dpDateEnd">
          <label>Date end</label>
        </md-datepicker>

        <md-field>
          <label for="movie">First day of a week</label>
          <md-select v-model="firstDayOfAWeek">
            <md-option value="0">Sunday</md-option>
            <md-option value="1">Monday</md-option>
          </md-select>

        </md-field>

        <div>Driver name: {{driverName}}</div>
        <div>From {{dateStartIso}} to {{dateEndIso}}</div>
      </md-card-content>

      <md-card-actions>
        <md-button @click="btnTestClick">Test</md-button>
        <md-button @click="btnAddDriverClick">Add driver</md-button>
      </md-card-actions>
    </md-card>


  </div>
</template>


<script lang="ts">
/**
 * date - local
 */

import Vue from 'vue';
import { AppState } from '../models/interfaces';


let xxx: string | null;
xxx = null;

function formatDateIso (date: Date | null) {
  if (date && date.getMonth) {
    var m = ('0' + (date.getMonth() + 1)).slice(-2)
    var d = ('0' + date.getDate()).slice(-2)
    return '' + date.getFullYear() + '-' + m + '-' + d
  } else {
    return ''
  }
}

export default Vue.extend({
  name: 'RegularControls',
  data() {
    const initialState: AppState = {
      driverName: null,
      dateStart: null,
      dateEnd: null
    };
    return initialState;
  },
  created: function () {
    console.log('created. d Start =' + this.dateStart)
  },
  mounted: function () {
    // constructor Date(string) without T or Z is browser-specific!
    // this.selectedDate = new Date(2021, 11, 21) // Don't use new Date('2018-03-26T00:00:00Z')! Only local dates are correct!
    // this.$material.locale.firstDayOfAWeek = 1
  },
  computed: {
    dateStartIso(): string {
      // console.log(`compute selectedDateIso: `, this.selectedDate)
      return formatDateIso(this.dateStart)
    },
    dateEndIso() {
      // console.log(`compute selectedDateIso: `, this.selectedDate)
      return formatDateIso(this.dateEnd)
    },
    firstDayOfAWeek: {
      get () {
        (<any>this).$material.locale.firstDayOfAWeek
      },
      set (val: any) {
        (<any>this).$material.locale.firstDayOfAWeek = val
      }
    }
  },
  methods: {
    btnTestClick () {
      console.log(`test selectedDateIso: `, this.dateStart)
    },
    btnAddDriverClick(){
      console.log('1');
    }
  }
})
</script>

<style lang="scss">
  .regular-controls {
    padding: 5px;    
  }
  .regular-controls_card {
    // width: 100%;
    padding: 5px;
  }
  @media only screen and (min-width: 768px) {
    .regular-controls {
      padding:25px;
      text-align: center;
    }
    .regular-controls_card{
      padding:25px;
      // display: inline-block;
      // width: 500px;
    }
  }

  .md-button.md-clear{
    display: none;
  }
</style>
