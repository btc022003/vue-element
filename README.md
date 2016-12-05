# vue-element

> A Vue.js project with element-ui....使用vue.js结合element实现一些简单的效果

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

参考链接:  
[element-ui](http://element.eleme.io/)  
[vue-router](http://router.vuejs.org/)  

通过插件实现页面导航,使用局部路由实现局部刷新  

```javascript
//路由信息配置'./src/main.js'
//通过设置Childern节点实现
const routes = [
    {path:'/home',component:Home},
    {path:'/list',component:List},
    //设置子路由 在页面内部渲染
    {path:'/movie',component:Movie,
        children:[
            {name:'castDetail',path:'/cast_detail/:id',component:CastDetail}
        ]
    },
    {path:'*',component:Home}
]

```

局部路由部分查看组件页面'./src/components/Movie.vue'

