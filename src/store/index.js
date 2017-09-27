import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    goal_title:'Wake up time',
    goal_description:'Wake up by 6am',
    goal_reason: 'So I can be more productive and have more energy!',
  },
  mutations: {

    editGoalTitle(state) {
      state.goal_title = 'Morning Routine'
    },
    editGoalDescription(state) {
      state.goal_description = 'Wake up by 5am!!!!'
    }
  }

})
