import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueaxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { baseURL } from './env'
Vue.use(vueaxios, axios);
Vue.use(VueCookie);
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;
//路由拦截
axios.interceptors.response.use((response) => {
    let res = response.data;
    let path = location.hash;

    if (res.status == 0) {
        console.log(res.status);
        return res.data
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login';
        }
    } else {
        alert(res.msg)
        return Promise.reject(res);
    }
}, (err) => {
    throw new Error(err.message)
})


Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

console.log(baseURL);
console.log(process.env);