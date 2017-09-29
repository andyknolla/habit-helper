<template>
  <div>

    <md-layout md-align="center">
    <router-link to="/"><md-button>Home</md-button></router-link>
    <router-link :to="{ name: 'dayview', params: { date:todaysDate } }"><md-button>Today</md-button></router-link>
  </md-layout>
    <h1>Setup</h1>

    <HabitSetup />

  </div>
</template>

<script>
  import HabitSetup from './setup/HabitSetup.vue';
  import store from '../store'

  export default {
    name: 'setup',

    components: { HabitSetup },

    data () {
      return {

      }
    },
    methods: {

    },

    computed: {
      todaysDate() {
        return store.state.todaysDate
      }
    }
  }
</script>

<style>
</style>
