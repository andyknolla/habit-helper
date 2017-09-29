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
        completed: false
      },
      {
        id: 2,
        date: "09-27-2017",
        title: 'Title 2',
        description: 'desc number Tharee',
        why: 'because dirka dirka dirka',
        type: 'bad',
        success: 1,
        completed: true
      },
      {
        id: 3,
        date: "09-28-2017",
        title: 'Title 31',
        description: 'third desc',
        why: 'because dirka jihad trebaja',
        type: 'bad',
        success: 0,
        completed: false
      },
      {
        id: 4,
        date: "09-28-2017",
        title: 'Title 6',
        description: 'third desc',
        why: 'because dirka jihad trebaja',
        type: 'bad',
        success: 0,
        completed: true
      },
      {
        id: 5,
        date: "09-29-2017",
        title: 'Title 3',
        description: 'third desc',
        why: 'because dirka jihad trebaja',
        type: 'bad',
        success: 0,
        completed: false
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
    toggleHabitCompletion(state, payload) {
      console.log('store payload', payload);
      let index;
      state.day_habits.find( (habit) => {
        if(habit.id === payload.id) {
          habit.completed ? habit.completed = false : habit.completed = true
        }
      })
    }
  }

})
