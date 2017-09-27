<template>
  <md-card md-with-hover v-bind:class="{ complete: habitStatus }">
    <md-card-header>
      <div class="md-title">Habit Title...{{ goal_title }}</div>
      <div class="md-subhead"><router-link to="/setup">Edit</router-link></div>
    </md-card-header>

    <md-card-content>
      <div>Goal description: {{ goal_description }}</div>
      <div>Why?: {{ goal_reason }}</div>
    </md-card-content>

    <md-button @click="completeGoal">Check!</md-button>
  </md-card>
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
