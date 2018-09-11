import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Category from '@/pages/Category'
import Product from '@/pages/Product'
import User from '@/pages/User'
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