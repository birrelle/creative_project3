import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Cart.vue'
import About from '../views/About.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/cart',
    name: "Cart",
    component: Contact
  },
  {
    path: '/about',
    name: "About",
    component: About
  },
  {
    path: '/product/:id',
    name: "product",
    component: Product
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
