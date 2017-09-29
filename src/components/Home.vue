<template>
  <div class="home">
    <h1>Habit Helper</h1>
    <router-link to="/setup">Setup</router-link>
    <router-link :to="{ name: 'dayview', params: {date: todaysDate} }">Today</router-link>

  </div>
</template>

<script>
  import Moment from 'moment'
  import store from '../store'


  export default {
    name: 'home',

    data () {
      return {

      }
    },
    methods: {

    },
    created() {
      console.log('day_habits: ', store.state.day_habits);
      if(store.state.day_habits.length > 5) {
        console.log('new habit: ', store.state.day_habits[5].title);
      }
    },

    computed: {
      todaysDate() {
        return Moment().format("MM-DD-YYYY")
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
