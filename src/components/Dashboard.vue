<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/Setup">Setup</router-link>
    <h1>Dashboard</h1>
    <Sleep />
    <Diet />
    <Exercise />
  </div>
</template>

<script>
  import Exercise from './Exercise.vue';
  import Diet from './Diet.vue';
  import Sleep from './Sleep.vue';

  export default {
    name: 'dashboard',

    components: { Sleep, Diet, Exercise },

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
