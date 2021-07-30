import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import My from '../views/my/index.vue'
import Shop from '../views/shop/shop.vue'
import Quanbu from '../views/quanbu/quanbu.vue'
import Bargain from '../views/bargain/bargain.vue'
import Layout from '../views/layout.vue'
import Login from '../views/login/login.vue'
import Register from '../views/register/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/login",
    component:Login,
    meta:{
      index:2
    }
  },
  {
    path:"/register",
    component: Register,
    index: 2
  },
  {
    path: '/',
    // name: 'layout',
    component: Layout,
    children:[
      { path: "", component: Home, meta: { index: 1}},
      { path: "quanbu", component: Quanbu, meta: { index: 1 }},
      { path: "bargain", component: Bargain, meta: { index: 2 }},
      { path: "shop", component: Shop, meta: { index: 2 }},
      { path: "my", component: My, meta: { index: 2}}
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
