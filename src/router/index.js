import Vue from 'vue'
import Router from 'vue-router'
import city from '@/components/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'city',
      component: city
    }
  ]
})
