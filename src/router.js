import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './components/Home.vue'
import edit from './components/Edit.vue'
import content from './components/Content.vue'
import gallery from './components/Gallery.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/edit', component: edit },
        { path: '/content/:id/:title', component: content },
        // { path: '/content', component: content },
        { path: '/gallery', component: gallery }
    ]
})



export default router