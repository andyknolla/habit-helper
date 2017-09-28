import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    goal_title:'Wake up time',
    goal_description:'Wake up by 6am',
    goal_reason: 'So I can be more productive and have more energy!',
    habitComplete: false,
    habitData: {
      title: 'New Title',
      description: 'new desc',
      why: 'because dirka'
    }
  },
  mutations: {

    editHabit(state,payload) {
      state.habitData = payload
      console.log('new edit! State = ', state);
    },

    editGoalTitle(state, payload) {
      state.goal_title = payload
      console.log('state change', 'state = ', state);
    },
    editGoalDescription(state, payload) {
      state.goal_description = payload
    },
    toggleHabitCompletion(state) {
      state.habitComplete ? state.habitComplete = false : state.habitComplete = true;
    }
  }

})
