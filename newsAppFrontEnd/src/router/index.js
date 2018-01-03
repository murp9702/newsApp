import Vue from 'vue'
import Router from 'vue-router'
import MainFeed from '@/components/MainFeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainFeed',
      component: MainFeed
    }
  ]
})
