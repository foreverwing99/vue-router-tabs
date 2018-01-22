import Vue from 'vue'
import VueRouter from 'vue-router'
const aComponent = resolve => require(['../pages/a.vue'], resolve)
const bComponent = resolve => require(['../pages/b.vue'], resolve)
const cComponent = resolve => require(['../pages/c.vue'], resolve)


Vue.use(VueRouter)

//使用AMD方式加载
const routes = [
    {
        path: '/a',
        component: aComponent,
        props: true
    },{
        path: '/b',
        component: bComponent,
        props: true
    },{
        path: '/c',
        component: cComponent,
        props: true
    },

    ]

const router = new VueRouter({
    routes,
    mode: 'hash', //default: hash ,history
})




export default router
