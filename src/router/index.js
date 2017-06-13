import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Login
    }
  ]
})
