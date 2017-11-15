import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const Demo = () => import('@/pages/Demo')
const AccountDashboard = () => import('@/pages/AccountDashboard')
const FindUsers = () => import('@/pages/FindUsers')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/account-dashboard',
      name: 'AccountDashboard',
      component: AccountDashboard
    },
    {
      path: '/find-users',
      name: 'FindUsers',
      component: FindUsers
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
