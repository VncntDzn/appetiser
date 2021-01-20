import Vue from 'vue'
import VueRouter from 'vue-router'

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
})

export default router
