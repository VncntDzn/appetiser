import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',

    component: () => import('../views/auth/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Login',
        component: () => import('../views/auth/Login')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register')
      },
    ]
  },
  {
    path: '/verification',
    name: 'Verify',
    component: () => import('../views/auth/Verify.vue'),
  },

  {
    path: '/guarded-route',
    name: 'Guarded Route',
    component: () => import('../views/GuardedView.vue'),
    meta: {
      requiresAuth: true,

    },
  },
  {
    path: '*',
    name: "NotFound",
    component: () => import('../views/NotFound')
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
});

/* Allow only users who are email verified */
router.beforeEach((to, from, next) => {
  // Checks if routes requires Auth 
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if the current user's email is verified 
    if (store.getters['appt/statusGetter'] === 'Success!') {
      next();
      return
    }
    next({
      path: '/',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
