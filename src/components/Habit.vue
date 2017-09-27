<template>
  <div class="single-habit" v-bind:class="{ complete: habitStatus }">
    <h1>Habit Title...{{ goal_title }} </h1><span><router-link to="/setup">Edit</router-link></span>
    <div>Goal description: {{ goal_description }}</div>
    <div>Why?: {{ goal_reason }}</div>

    <button @click="completeGoal">Check!</button>

  </div>
</template>

<script>
import store from '../store'

export default({
  data() {
    return {

    }
  },
  methods: {
    completeGoal() {
      store.commit('toggleHabitCompletion');
    }
  },
  computed: {
    goal_title() {
      return store.state.goal_title
    },
    goal_description() {
      return store.state.goal_description
    },
    goal_reason() {
      return store.state.goal_reason
    },
    habitStatus() {
      return store.state.habitComplete
    }
  }

})

</script>

<style>
  .single-habit {
    padding: 15px;
    background: lightgray;
  }

  .complete {
    background: green;
  }
</style>
