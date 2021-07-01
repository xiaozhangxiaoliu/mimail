import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/index',
        component: Home,
        children: [{
                path: '/index',
                name: 'index',
                component: () =>
                    import ('../views/home/children/index.vue')
            },
            {
                path: '/product/:id',
                name: 'product',
                component: () =>
                    import ('../views/home/children/product.vue')
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: () =>
                    import ('../views/home/children/detail.vue')
            }
        ]
    },

    {
        path: '/login',
        component: () =>
            import ('../views/login/login.vue')
    }

]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default router