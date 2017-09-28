import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    habits: [
      {
        title: 'Title 1',
        description: 'desc number two',
        why: 'because dirka',
        type: 'good',
        complete: false
      },
      {
        title: 'Title 2',
        description: 'desc number Tharee',
        why: 'because dirka dirka dirka',
        type: 'bad',
        complete: false
      },
      {
        title: 'Title 3',
        description: 'third desc',
        why: 'because dirka jihad trebaja',
        type: 'bad',
        complete: false
      }
    ],
    habitData: {
      title: 'New Title',
      description: 'new desc',
      why: 'because dirka',
      type: 'good',
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
