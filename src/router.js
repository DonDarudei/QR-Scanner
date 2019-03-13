import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import test from './views/test.vue'
import qr from './views/QRscan.vue'
import VueQRScan from './views/VueQRScan.vue'
import vuecodeqr from './views/vuecodeqr.vue'

Vue.use(Router)

export default new Router({
mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/vuecodeqr',
      name: 'vuecodeqr',
      component: vuecodeqr
    },
    {
      path: '/',
      name: 'test',
      component: test
    },
    {
      path: '/qr',
      name: 'qr',
      component: qr
    },
    {
      path: '/VueQRScan',
      name: 'VueQRScan',
      component: VueQRScan
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
