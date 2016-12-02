<template>
    <div>
        <el-row :gutter="15">
        <el-col :span="18" :offset="1" v-for="(movie, index) in movieList">
            <el-card :body-style="{ padding: '0px'}">
                <img :src="movie.images.large" class="image">
                <div style="padding: 14px;">
                    <span>{{movie.title}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{ movie.genres.join(',') }}</time>
                        <el-button type="text" class="button" @click="clickHandle(movie)">操作按钮</el-button>
                    </div>
                </div>
                <ul class="list-casts">
                    <li v-for="item in movie.casts">
                        <img :src="item.avatars.large" :alt="item.alt">
                        <h5>{{item.name}}</h5>
                    </li>
                </ul>
            </el-card>
        </el-col>
        </el-row>
    </div>

</template>
<script>
import $ from 'jquery'
export default{
    data(){
        return{
            movieList:[]
        }
    },
    created(){
        var app = this
        $.getJSON('http://api.douban.com/v2/movie/in_theaters?callback=?')
            .then(res=>app.movieList=res.subjects)
    },
    methods:{
        clickHandle(movie){
            this.$message({
                type:'warning',
                message:movie.title
            })
        }
    }
}
</script>
<style scoped>
.image{
    height:220px;
}
.list-casts{
    list-style:none;
}
.list-casts img{
    height:80px;
}
.list-casts li{
    float:left;
    margin-left:10px;
}
.list-casts h5{
    margin:0;
}
</style>
