import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    habitData: {
      title: 'New Title',
      description: 'new desc',
      why: 'because dirka',
      complete: false
    }
  },
  mutations: {
    editHabit(state,payload) {
      state.habitData = payload
    },
    toggleHabitCompletion(state) {
      state.habitData.complete ? state.habitData.complete = false : state.habitData.complete = true;
    }
  }

})
