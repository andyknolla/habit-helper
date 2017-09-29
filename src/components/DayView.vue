<template>
  <div>
    <md-layout md-align="center">
      <router-link to="/"><md-button>Home</md-button></router-link>
      <router-link to="/Setup"><md-button>Setup</md-button></router-link>
    </md-layout>

    <div class="day-header">
      <router-link
        :to="{ name: 'dayview', params: {date: previousDay} }" @click="changeDay(prev)">
        <md-icon md-iconset="fa fa-chevron-left fa-2x"></md-icon>
      </router-link>

      <div class="header">
        <h1 class="md-display-1">Today</h1>
        <div class="md-body-1">{{ todaysDate }}</div>
        <!-- <div>Test div...dateViewed: {{ dateViewed }}</div> -->
      </div>

      <router-link
        :to="{ name: 'dayview', params: {date: nextDay} }">
        <md-icon md-iconset="fa fa-chevron-right fa-2x"></md-icon>
      </router-link>
    </div>

    <ul>
      <li v-for="(habit, index) in habits"
        is="Habit"
        v-bind:key="habit.id"
        v-bind:id="habit.id"
        v-bind:date="habit.date"
        v-bind:title="habit.title"
        b-bind:description="habit.description"
        v-bind:why="habit.why"
        v-bind:type="habit.type"
        v-bind:complete="habit.complete"/>
      </li>
    </ul>

  </div>
</template>

<script>
  import Habit from './Habit.vue';
  import Moment from 'moment'
  import store from '../store'


  export default {
    name: 'dayView',

    components: { Habit },

    data () {
      return {

      }
    },
    methods: {
      previousDay() {
        store.commit('previousDay')
      },
      nextDay() {
        store.commit('nextDay')
      }
    },
    created() {
      store.commit('setDayInView', this.$route.params.date )
    },
    computed: {
      previousDay() {
        let splitDate = this.$route.params.date.split('-');
        let day = splitDate[1] - 1;
        let switchDay = splitDate.splice(1,1,day);
        let newDay = splitDate.join('-');
        return newDay;
      },
      nextDay() {
        let splitDate = this.$route.params.date.split('-');
        let day = parseInt(splitDate[1]) + 1;
        let switchDay = splitDate.splice(1,1,day);
        let newDay = splitDate.join('-');
        return newDay;
      },
      todaysDate() {
          return store.state.todaysDate
      },
      dateViewed() {
        return store.state.dayInView
      },

      habits() {
        return this.habits = store.state.day_habits.filter( (habit) => {
          return habit.date == this.$route.params.date
        })
      }

    }

  }
</script>

<style>
  .day-header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header {
    text-align: center;
  }
  .md-card {
    margin-bottom: 15px;
  }
</style>
