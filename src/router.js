import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import NewAd from '@/components/NewAd'
import Orders from '@/components/Orders'
import Login from '@/components/Login'
import Reg from '@/components/Reg'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'',
            name:'home',
            component:Home
        },
        {
            path:'/registration',
            name:'reg',
            component:Reg
        },
        {
            path:'/list',
            name:'list',
            component:List
        },
        {
            path:'/orders',
            name:'orders',
            component:Orders
        },
        {
            path:'/new',
            name:'new',
            component:NewAd
        },
        {
            path:'/login',
            name:'login',
            component:Login
        }
    ]
})