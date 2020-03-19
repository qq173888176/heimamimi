import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import UseElement from '../views/useElement/index.vue'

Vue.use(VueRouter)
var router = new VueRouter({
    routes: [{
            path: "/login",
            component: Login
        },{
            path:'/useElement',
            component:UseElement
        }

    ]
})
export default router
