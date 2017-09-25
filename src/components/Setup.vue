<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <h1>Setup</h1>
    <SleepSetup />
    <ExerciseSetup />
    <DietSetup />

  </div>
</template>

<script>
  import ExerciseSetup from './setup/ExerciseSetup.vue';
  import DietSetup from './setup/DietSetup.vue';
  import SleepSetup from './setup/SleepSetup.vue';

  export default {
    name: 'setup',

    components: { SleepSetup, DietSetup, ExerciseSetup },

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
