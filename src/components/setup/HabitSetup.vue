<template>
  <div>

    <md-card md-with-hover v-bind:class="{ complete: habitData.complete }">
      <md-card-header>
        <div class="md-title">{{ habitData.title }}</div>
      </md-card-header>

      <md-card-content>
        <div>Goal description: {{ habitData.description }}</div>
        <div>Why?: {{ habitData.why }}</div>
        <div>Loaded id: {{ id }}</div>
      </md-card-content>
    </md-card>

    <form @submit.prevent="handleSubmit">
      <md-input-container>
        <label>Title</label>
        <md-input v-model="habitData.title" />
      </md-input-container>
      <md-input-container>
        <label>Description</label>
        <md-input v-model="habitData.description" />
      </md-input-container>

      <div>
        <div>Is this a good or bad habit?</div>
        <label>Good</label>
        <md-radio md-value="good" v-model="habitData.type" type="radio" name="type" />
        <label>Bad</label>
        <md-radio md-value="bad" v-model="habitData.type" type="radio" name="type" />
      </div>

      <md-input-container>
        <label>Why</label>
        <md-input v-model="habitData.why" />
      </md-input-container>

      <md-button class="md-raised md-primary" @click='handleSubmit'>Submit</md-button>
    </form>

  </div>
</template>

<script>
import store from '../../store'

export default({

  data() {
    return {
      habitData: { },
      id: this.$route.params.id
    }
  },

  created() {
    this.habitData = store.state.day_habits.find( (habit) => {
      return habit.id == this.$route.params.id;
    })
  },
  watch: {
    // for changing habits from within this page...
    '$route'(to, from) {
      this.id = to.params.id;
    }
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
