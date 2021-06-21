import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueaxios from 'vue-axios'
import { baseURL } from './env'
Vue.use(vueaxios, axios);

// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//路由拦截
axios.interceptors.response.use((response) => {
    let res = response.data;
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        window.location.href = '/#/login'
    } else {
        alert(res.msg)
    }
}, (err) => {
    throw new Error(err.message)
})


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

console.log(baseURL);
console.log(process.env);