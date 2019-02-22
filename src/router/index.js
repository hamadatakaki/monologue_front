import Vue from 'vue'
import Router from 'vue-router'

import Timeline from '@/components/Timeline'
import Signin from '@/components/Signin'
import Signout from '@/components/Signout'
import Profile from '@/components/Profile'
import Fail from '@/components/Fail'

import controller from '@/components/js/controller'

Vue.use(Router)

let redirectToSignin = ((to, from, next) => {
  if (controller.is_logined()){
    console.log("user is logined with "+localStorage.token)
    next()
  }
  else {
    console.log("user is logouted")
    next({ name: 'signin' })
  }
})

const router = new Router({
  routes: [
    {
      path: '/',
      component: Timeline,
      meta: { requireAuth: true },
      beforeEnter: redirectToSignin
    },
    {
      path: '/signin',
      component: Signin,
      name: 'signin'
    },
    {
      path: '/signout',
      component: Signout,
      name: 'signout',
      meta: { requireAuth: true },
      beforeEnter: redirectToSignin
    }
  ]
})

export default router;

/*
TODO When the user is authorized or not, how the router is controlled ?
  the user is authorized -> his timeline.
          not authorized -> sign-in page.
  参考URL: https://qiita.com/takatama/items/05e9fbc7199cde4caf60
*/
