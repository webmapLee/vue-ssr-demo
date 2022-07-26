import { createRouter,createMemoryHistory,createWebHistory } from 'vue-router'

import Home from '../views/Home/index.vue'
import About from '../views/About/index.vue'
import {isSSR} from '../utils'

const history = isSSR ? createMemoryHistory() : createWebHistory()

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home,
    },
    {
        path:'/about',
        name:'About',
        component: About,
    }
]

export default ()=>createRouter({
    history,
    routes
})