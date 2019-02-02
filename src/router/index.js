import Vue from 'vue'
import Router from 'vue-router'
import Replace from '@/components/replace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Replace',
      component: Replace
    }
  ]
})
