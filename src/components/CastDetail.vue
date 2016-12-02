<template>
    <div>
        <img :src="detail.avatars.large" class="detail-avatar" alt="">
        <h3>{{detail.name}}</h3>
        <ul>
            <li v-for="item in detail.works" :title="item.subject.title">{{item.subject.title | doSub}}</li>
        </ul>
    </div>
</template>
<script>
    import $ from 'jquery'
    export default{
        data(){
            return{
                detail:{avatars:{}}
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
                this.detail = {avatars:{}}
                var app =this
                $.getJSON('http://api.douban.com/v2/movie/celebrity/'+this.$route.params.id+'?callback=?')
                    .then(res=>app.detail=res)
            }
        },
        filters:{
            doSub(val){
                return val.length>8?val.substring(0,7)+"...":val
            }
        }
    }
</script>
<style>
.detail-avatar{
    width:120px;
    max-height:300px;
}
ul li{
    text-align:left;
}
</style>
