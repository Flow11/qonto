import Vue from 'vue'
import Router from 'vue-router'
import Transactions from '@/pages/Transactions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    }
  ]
})
