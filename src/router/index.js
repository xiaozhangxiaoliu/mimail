import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: '/index',
    components: {
        default: Home
    },
    children: [{
            path: '/index',
            name: 'iindex',
            component: () =>
                import ('../views/home/children/index.vue')
        },
        {
            path: '/product/:id',
            name: 'product',
            import: () =>
                import ('../views/home/children/product.vue')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            import: () =>
                import ('../views/home/children/detail.vue')
        }
    ]
}, ]

const router = new VueRouter({
    routes
})

export default router