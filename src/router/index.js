import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Product from '@/pages/Product'
import User from '@/pages/User'
import Order from '@/pages/Order'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Order',
      component: Order
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
  ]
})
