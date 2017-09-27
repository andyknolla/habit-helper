<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/Setup">Setup</router-link>
    <h1>Today</h1>
    <div>Today's date: </div>
    <Habit />
  </div>
</template>

<script>
  import Habit from './Habit.vue';

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

    }
  }
</script>

<style>
</style>
