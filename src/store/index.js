import Vue from 'vue'
import Vuex from 'vuex'
import Moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    todaysDate: Moment().format("MM-DD-YYYY"),
    dayInView: '09-27-2017',

    day_habits: [
      {
        id: 1,
        date: "09-27-2017",
        title: 'Title 1',
        description: 'desc number two',
        why: 'because dirka',
        type: 'good',
        success: 0,
        complete: false
      },
      {
        id: 2,
        date: "09-27-2017",
        title: 'Title 2',
        description: 'desc number Tharee',
        why: 'because dirka dirka dirka',
        type: 'bad',
        success: 1,
        complete: false
      },
      {
        id: 3,
        date: "09-28-2017",
        title: 'Title 31',
        description: 'third desc',
        why: 'because dirka jihad trebaja',
        type: 'bad',
        success: 0,
        complete: false
      },
      {
        id: 3,
        date: "09-28-2017",
        title: 'Title 6',
        description: 'third desc',
        why: 'because dirka jihad trebaja',
        type: 'bad',
        success: 0,
        complete: false
      },
      {
        id: 3,
        date: "09-29-2017",
        title: 'Title 3',
        description: 'third desc',
        why: 'because dirka jihad trebaja',
        type: 'bad',
        success: 0,
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
    setDayInView(state, payload) {
      state.dayInView = payload
    },
    addHabit(state, payload) {
      state.day_habits.push(payload)
    },
    editHabit(state,payload) {
      state.habitData = payload
    },
    toggleHabitCompletion(state) {
      state.habitData.complete ? state.habitData.complete = false : state.habitData.complete = true;
    }
  }

})
