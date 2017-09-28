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

    <ul>
      <li v-for="(habit, index) in habits"
        is="Habit"
        v-bind:key="index"
        v-bind:title="habit.title"
        b-bind:description="habit.description"
        v-bind:why="habit.why"
        v-bind:type="habit.type"
        v-bind:complete="habit.complete"/>
      </li>
    </ul>

  </div>
</template>

<script>
  import Habit from './Habit.vue';
  import Moment from 'moment'
  import store from '../store'


  export default {
    name: 'dayView',

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
      },
      habits() {
        return this.habits = store.state.habits
      }
    }
  }
</script>

<style>
  .day-header {
    margin-bottom: 20px;
  }

  .md-card {
    margin-bottom: 15px;
  }
</style>
