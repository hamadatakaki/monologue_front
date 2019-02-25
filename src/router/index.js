import Vue from 'vue'
import Router from 'vue-router'

import Timeline from '@/components/Timeline'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Registration from '@/components/Registration'
import Profile from '@/components/Profile'
import Fail from '@/components/Fail'

import controller from '../components/js/controller'

Vue.use(Router)

let redirectToLogin = ((to, from, next) => {
  if (controller.is_logined()){
    next()
  }
  else {
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
    },
    {
      path: '/registration',
      component: Registration,
      name: 'registration'
    },
    {
      path: '/profile/:uuid',
      component: Profile,
      name: 'profile',
      props: true,
      meta: { requireAuth: true },
      beforeEnter: redirectToLogin,
      beforeUpdate: redirectToLogin
    },
    {
        path: '*',
        component: Fail
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
