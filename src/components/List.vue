<template>
    <div>
        <el-row :gutter="15">
        <el-col :span="18" :offset="1" v-for="(book, index) in listBook">
            <el-card :body-style="{ padding: '0px'}" style="height:300px;">
                <img :src="book.img" class="image">
                <div style="padding: 14px;">
                    <span>{{book.title}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ book.author }}</time>
                        <el-button type="text" class="button" @click="clickHandle(book)">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
        </el-row>
    </div>
</template>
<script>
    import $ from 'jquery'
    import api from '../services/api'
    export default{
        data(){
            return{
                currentDate:new Date().toLocaleDateString(),
                listBook:[]
            }
        },
        beforeRouteEnter(to,from,next){
            next()
        },
        created(){//组件创建完成后执行
            console.dir(this)
            //this.$route可以获取传递的参数
            console.dir(this.$route.query.type)
            this.fetchData(type)
        },
        watch:{
            //路由地址改变后获取数据
            $route:function(){
                console.log('地址改变了')
                this.fetchData()
            }
        },
        methods:{
            clickHandle(book){
                this.$message({
                    type:'success',
                    message:book.title
                })
            },
            fetchData(){ 
                //var app = this
                //$.getJSON('http://btc022003.github.io/dangdang-app-angularjs/data/book_'+this.$route.query.type+'.json').then(res=>{
                //    app.listBook = res
                //})
                this.listBook = api.getData()
            }
        }
    }
</script>
