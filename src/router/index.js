import Vue from 'vue'
import Router from 'vue-router'

import GeneralTab from '@/components/GeneralTab'
import Timeline from '@/components/Timeline'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Registration from '@/components/Registration'
import Profile from '@/components/Profile'
import Fail from '@/components/Fail'

import controller from '../components/js/controller'

Vue.use(Router)

let redirectToLogin = ((to, from, next) => {
  if (controller.isLogined()) {
    next()
  }
  else {
    next({ name: 'login' })
  }
})

const router = new Router({
  routes: [
    {
      path: "/",
      component: GeneralTab,
      children:[
        {
          path: 'login',
          component: Login,
          name: 'login'
        },
        {
          path: 'logout',
          component: Logout,
          name: 'logout',
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
        },
        {
          path: 'registration',
          component: Registration,
          name: 'registration'
        },
        {
          path: '',
          component: Timeline,
          name: "timeline",
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
        },
        {
          path: 'profile/:uuid',
          component: Profile,
          name: 'profile',
          props: route => ({ uuid: String(route.params.uuid) }),
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
        },
        {
          path: '*',
          component: Fail
        }
      ]
    }
  ]
})

export default router;
