import Vue from 'vue'
import Router from 'vue-router'

import Timeline from '@/components/Timeline'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Profile from '@/components/Profile'
import Fail from '@/components/Fail'

import controller from '../components/js/controller'

Vue.use(Router)

let redirectToLogin = ((to, from, next) => {
  if (controller.is_logined()){
    console.log("user is logined with "+localStorage.token)
    next()
  }
  else {
    console.log("user is logouted")
    next({ name: 'login' })
  }
})

const router = new Router({
  routes: [
    {
      path: '/',
      component: Timeline,
      name: "timeline",
      meta: { requireAuth: true },
      beforeEnter: redirectToLogin,
      beforeUpdate: redirectToLogin

    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/logout',
      component: Logout,
      name: 'logout',
      meta: { requireAuth: true },
      beforeEnter: redirectToLogin,
      beforeUpdate: redirectToLogin
    }
  ]
})

export default router;

/*
TODO When the user is authorized or not, how the router is controlled ?
  the user is authorized -> his timeline.
          not authorized -> login page.
  参考URL: https://qiita.com/takatama/items/05e9fbc7199cde4caf60
*/
