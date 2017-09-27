<template>
  <div>
    <h1>Habit Title...{{ goal_title }}</h1>
    <div>Goal description: {{ goal_description }}</div>

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
    }
  }

})

</script>

<style>

</style>
