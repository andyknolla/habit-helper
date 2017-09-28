<template>

  <md-card md-with-hover v-bind:class="{ complete: habitData.complete }">
    <md-card-header>
      <div class="md-title">Habit Title...{{ title }}</div>
      <span class="md-subhead"><router-link to="/setup"><md-icon md-iconset="fa fa-pencil"></md-icon></router-link></span>
    </md-card-header>

    <md-card-content>
      <div>Habit description: {{ description }}</div>
      <div>Habit type: {{ type }}</div>
      <div>Why?: {{ why }}</div>
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

  props: ['title', 'description', 'why', 'type', 'completed'],

  created() {
    this.habitData = store.state.habitData
  },

  methods: {
    completeGoal() {
      store.commit('toggleHabitCompletion');
    }
  },

  computed: {

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
