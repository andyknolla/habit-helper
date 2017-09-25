import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Setup from '@/components/Setup'

import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    }
  ]
})
