<template>
  <md-card md-with-hover v-bind:class="{ complete: habitStatus }">
    <md-card-header>
      <div class="md-title">Habit Title...{{ habitData.title }}</div>
      <span class="md-subhead"><router-link to="/setup"><md-icon md-iconset="fa fa-pencil"></md-icon></router-link></span>
    </md-card-header>

    <md-card-content>
      <div>Goal description: {{ habitData.description }}</div>
      <div>Why?: {{ habitData.why }}</div>
    </md-card-content>

    <md-button @click="completeGoal">Check!</md-button>
  </md-card>
</template>

<script>
import store from '../store'

export default({
  data() {
    return {
      habitData: {}
    }
  },
  created() {
    this.habitData = store.state.habitData
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
    border: 2px solid green;
  }
</style>
