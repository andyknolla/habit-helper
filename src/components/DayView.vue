<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/Setup">Setup</router-link>
    <h1>Today</h1>
    <div>{{ todaysDate }}</div>
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
</style>
