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
            console.log(this.$route.params.id)
            this.fetchData()
        },
        watch:{
            '$route':'fetchData'
        },
        methods:{
            fetchData(){
                this.detail = {}
                var app =this
                $.getJSON('http://api.douban.com/v2/movie/celebrity/'+this.$route.params.id+'?callback=?')
                    .then(res=>app.detail=res)
            }
        }
    }
</script>
