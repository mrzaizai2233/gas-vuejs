import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Product from '@/pages/Product'
import Customer from '@/pages/Customer'
import Order from '@/pages/Order'
import OrderView from '@/pages/OrderView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Order',
      component: Order
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    },
    {
      path: '/categorys',
      name: 'Category',
      component: Category
    },
    {
      path: '/products',
      name: 'Product',
      component: Product
    },
    {
      path: '/customers',
      name: 'Customer',
      component: Customer
    },
  ]
})
