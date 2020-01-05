import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
