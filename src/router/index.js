import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Setup from '@/components/Setup'

import DayView from '@/components/DayView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dayview/:date',
      name: 'dayview',
      component: DayView
    },
    {
      path: '/setup/:id',
      name: 'habitSetup',
      component: Setup
    }
  ]
})
