import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import  List from './components/List'
import Movie from './components/Movie'

Vue.use(VueRouter) //引入路由
Vue.use(ElementUI) //引入element-ui

const Home = {
    template:'<div>Home Page</div>',
    //路由进入之前 获取传递的参数
    //to.query中是url传递的参数
    beforeRouteEnter(to,from,next){
        console.dir(to)
        console.dir(from)
        console.dir(next)
        next()
    }
}
//const List = {template:'<div>List Page</div>'}

const routes = [
    {path:'/home',component:Home},
    {path:'/list',component:List},
    {path:'/movie',component:Movie},
    {path:'*',component:Home}
]
const router = new VueRouter({
    routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})
