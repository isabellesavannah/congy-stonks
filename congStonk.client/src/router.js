import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage')
    // TODO when authentication works
    // beforeEnter: authGuard
  },
  {
    path: '/transaction',
    name: 'Transaction',
    component: loadPage('TransactionPage')
    // TODO when authentication works
    // beforeEnter: authGuard
  },
  {
    path: '/tickerPage/:ticker',
    name: 'TickerPage',
    component: loadPage('TickerPage')
    // TODO when authentication works
    // beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
