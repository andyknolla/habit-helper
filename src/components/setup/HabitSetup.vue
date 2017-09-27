<template>
  <div>
    <h2>Habit Title...{{ goal_title }}</h2><button @click='changeGoalTitle'>Change</button>
    <div>Goal description: {{ goal_description }}</div><button @click='changeGoalDescription'>Change</button>

  </div>
</template>

<script>
import store from '../../store'

export default({

  methods: {
    changeGoalDescription() {
      store.commit('editGoalDescription')
    },
    changeGoalTitle() {
      store.commit('editGoalTitle')
    }
  },
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
