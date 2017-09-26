import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    wake_time: 'Hella early',
    bed_time: 'Also really early',
    total_sleep: ''
  },
  mutations: {
    editSleepTime(state) {
      state.wake_time = '6am'
    },
    editBedTime(state) {
      state.bed_time = '9pm'
    }
  }

})
