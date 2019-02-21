import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/Timeline'
import Signin from '@/components/Signin'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root'
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/profile/:uuid',
      name: 'Profile',
      component: Profile
    }
  ]
})

/*
TODO When the user is authorized or not, how the router is controlled ?
  the user is authorized -> his timeline.
          not authorized -> sign-in page.
*/
