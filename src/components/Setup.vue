<template>
  <div>

    <md-layout md-align="center">
    <router-link to="/"><md-button>Home</md-button></router-link>
    <router-link :to="{ name: 'dayview', params: { date:todaysDate } }"><md-button>Today</md-button></router-link>
  </md-layout>
    <h1>Setup</h1>
    <h2>Add a Habit</h2>
    <HabitSetup />
    <div v-if="!$route.params.id">
      <h2>All Habits</h2>
      <ul >
        <li v-for="(habit, index) in habits"
          is="Habit"
          v-bind:key="habit.id"
          v-bind:id="habit.id"
          v-bind:date="habit.date"
          v-bind:title="habit.title"
          v-bind:description="habit.description"
          v-bind:why="habit.why"
          v-bind:type="habit.type"
          v-bind:completed="habit.completed"/>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Habit from './Habit.vue';
  import HabitSetup from './setup/HabitSetup.vue';
  import store from '../store'

  export default {
    name: 'setup',

    components: { HabitSetup, Habit },

    data () {
      return {

      }
    },
    methods: {

    },

    computed: {
      todaysDate() {
        return store.state.todaysDate
      },
      habits() {
        return store.state.day_habits
      }
    }
  }
</script>

<style>
  .md-card {
    margin-bottom: 15px;
  }
</style>
