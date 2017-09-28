<template>
  <div>
    <md-layout md-align="center">
      <router-link to="/">Home</router-link>
      <router-link to="/Setup">Setup</router-link>
    </md-layout>

    <md-layout md-vertical-align="center" md-column class="day-header">
      <h1 class="md-display-1">Today</h1>
      <div class="md-body-1">{{ todaysDate }}</div>
    </md-layout>

    <Habit />
  </div>
</template>

<script>
  import Habit from './Habit.vue';
  import Moment from 'moment'

  export default {
    name: 'dashboard',

    components: { Habit },

    data () {
      return {

      }
    },
    methods: {

    },

    computed: {
      todaysDate() {
        return Moment().format("MMM Do")
      }
    }
  }
</script>

<style>
  .day-header {
    margin-bottom: 20px;
  }
</style>
