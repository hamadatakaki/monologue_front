import Vue from 'vue'
import Router from 'vue-router'

import GeneralTab from '@/components/GeneralTab'
import Timeline from '@/components/Timeline'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Registration from '@/components/Registration'
import Profile from '@/components/Profile'
import EditProfile from '@/components/EditProfile'
import SearchResult from '@/components/SearchResult'
import Say from '@/components/Say'
import Fail from '@/components/Fail'

Vue.use(Router)

let redirectToLogin = ((to, from, next) => {
  if (localStorage.getItem('token') || '') {
    next()
  }
  else {
    next({ name: 'login' })
  }
})

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/registration',
      component: Registration,
      name: 'registration'
    },
    {
      path: "/",
      component: GeneralTab,
      children:[
        {
          path: 'logout',
          component: Logout,
          name: 'logout',
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
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
          path: 'profile/:account',
          component: Profile,
          name: 'profile',
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
        },
        {
          path: 'profile/:account/edit',
          component: EditProfile,
          name: 'edit-profile',
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
        },
        {
          path: 'search/:query',
          component: SearchResult,
          name: 'search-result',
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
        },
        {
          path: 'say',
          component: Say,
          name: 'say',
          meta: { requireAuth: true },
          beforeEnter: redirectToLogin,
          beforeUpdate: redirectToLogin
        }
      ]
    },
    {
      path: '*',
      component: Fail
    }
  ]
})

export default router;
