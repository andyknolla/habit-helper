<template>
  <div>
    <h1>Habit Title...{{ goal_title }} </h1><span><router-link to="/setup">Edit</router-link></span>
    <div>Goal description: {{ goal_description }}</div>
    <div>Why?: {{ goal_reason }}</div>

  </div>
</template>

<script>
import store from '../store'

export default({
  computed: {
    goal_title() {
      return store.state.goal_title
    },
    goal_description() {
      return store.state.goal_description
    },
    goal_reason() {
      return store.state.goal_reason
    }
  }

})

</script>

<style>

</style>
