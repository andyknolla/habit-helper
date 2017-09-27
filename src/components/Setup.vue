<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/dayview">Day View</router-link>
    <h1>Setup</h1>
    <HabitSetup />

  </div>
</template>

<script>
  import HabitSetup from './setup/HabitSetup.vue';

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

    }
  }
</script>

<style>
</style>
