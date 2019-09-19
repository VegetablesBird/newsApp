import Vue from 'vue'
import Router from 'vue-router'
import bm from './components/bm.vue'
import Home from './Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'bm',
          component: bm
        }
      ]
    }
  ]
})