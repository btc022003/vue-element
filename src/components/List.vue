<template>
    <div>
        <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button" @click="clickHandle">操作按钮</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                currentDate:new Date().toLocaleDateString()
            }
        },
        beforeRouterEnter(to,from,next){
            console.dir(to)
            next()
        },
        methods:{
            clickHandle(){
                this.$notify({
                    title:'提示',
                    message:'看起来很不错的汉堡'
                })
            }
        }
    }
</script>
