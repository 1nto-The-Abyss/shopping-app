import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("@/views/home/Home")
const Category = () => import("@/views/category/Category")
const Profile = () => import("@/views/profile/Profile")
const Detail = () => import("@/views/detail/Detail")
const Shopcart = () => import("@/views/shopcart/Shopcart")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/shopcart',
    component: Shopcart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
