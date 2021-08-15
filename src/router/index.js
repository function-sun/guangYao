import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/proIndex'
import login from '@/views/login'
import funpredictionIndex from '@/views/functionalPrediction'
import elepredictionIndex from '@/views/electricQuantityrediction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/functionPrediction',
      name: 'funpredictionIndex',
      component: funpredictionIndex
    },
    {
      path: '/electionPrediction',
      name: 'elepredictionIndex',
      component: elepredictionIndex
    },
  ]
})
