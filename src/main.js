import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueRouter)
Vue.use(VueAxios, axios)

// 导入jquery
import $ from 'jquery'
// 引入bootstrap
// import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.js'
// Vue.use(bootstrap)
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './static/css/style.css'

import calendar from './static/js/calendar.js'
Vue.use(calendar)

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router,
    data() {
        return {
            articleList: [],
            index: 0,
            // id: 0
        }
    }
})