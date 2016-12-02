<template>
    <div>
        演员详情:
        <p v-for="k in detail">{{k}}</p>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default{
        data(){
            return{
                detail:{}
            }
        },
        created(){
            var app =this
            console.log(this.$route.params.id)
            $.getJSON('http://api.douban.com/v2/movie/celebrity/1054452?callback=?')
                .then(res=>app.detail=res)
        }
    }
</script>
