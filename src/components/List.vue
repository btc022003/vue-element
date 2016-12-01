<template>
    <div>
        <el-col :span="8" v-for="(book, index) in listBook">
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
    </div>
</template>
<script>
    import $ from 'jquery'
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
        created(){
            console.dir(this)
            //this.$route可以获取传递的参数
            var app = this
            $.getJSON('http://btc022003.github.io/dangdang-app-angularjs/data/book_ertong.json').then(res=>{
                app.listBook = res
            })
        },
        methods:{
            clickHandle(book){
                this.$notify({
                    title:'提示',
                    message:book.title
                })
            }
        }
    }
</script>
