import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/auth/Login";
import CreateThread from "@/views/thread/CreateThread";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            isAuth:false
        },
        component: Login,
    },
    {
        path: '/create/thread',
        name: 'create thread',
        meta: {
            isAuth:true
        },
        component: CreateThread
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from) => {
    if (to.meta.isAuth && !localStorage.getItem('token')) {
        return {name: 'login '}
    }
    if (to.meta.isAuth === false && localStorage.getItem('token')) {
        return {name: 'login '}
    }
})
export default router
