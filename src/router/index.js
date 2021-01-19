import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/auth/Home.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/auth/Login')
      },
      {
        path: '/register',
        component: () => import('../views/auth/Register')
      },
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
