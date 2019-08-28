import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AdList from '@/components/AdList'
import NewAd from '@/components/NewAd'
import Orders from '@/components/Orders'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Ad from '@/components/Ad'

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
            component:AdList
        },
        {
            path:'/orders',
            name:'orders',
            component:Orders
        },
        {
            path:'/new',
            name:'newAd',
            component:NewAd
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/ad/:id',
            props:true,
            name:'ad',
            component:Ad
        }

    ]
})