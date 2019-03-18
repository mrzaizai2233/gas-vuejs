import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Product from '@/pages/Product'
import Customer from '@/pages/Customer'
import Quote from '@/pages/Quote'
import QuoteView from '@/pages/QuoteView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Quote',
      component: Quote
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: QuoteView
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
