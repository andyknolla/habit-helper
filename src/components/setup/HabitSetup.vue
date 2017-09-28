<template>
  <div>

    <h2>Habit Title...{{ habitData.title }}</h2>

    <div>Goal description: {{ habitData.description }}</div>
    <div>Why?: {{ habitData.why }}</div>

    <input v-model="habitData.title" />
    <input v-model="habitData.description" />
    <input v-model="habitData.why" />
    <button @click='handleSubmit'>Submit</button>

  </div>
</template>

<script>
import store from '../../store'

export default({

  data() {
    return {
      habitData: { }
    }
  },

  created() {
    this.habitData = store.state.habitData
  },

  methods: {
    handleSubmit() {
      store.commit('editHabit', this.habitData)

    },

    changeGoalDescription() {
      store.commit('editGoalDescription')
    },
    changeGoalTitle() {
      store.commit('editGoalTitle')
    }
  },
  computed: {

    // goal_title() {
    //   return store.state.goal_title
    // },
    goal_description() {
      return store.state.goal_description
    }
  }
})

</script>

<style>

</style>
