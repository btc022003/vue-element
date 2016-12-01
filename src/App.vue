<template>
  <div id="app">
      <el-row class="tac">
          <el-col :span="4">
              <el-menu class="el-menu-vertical-demo">
                  <el-submenu index="1">
                    <template slot="title">当当热销榜</template>
                    <el-menu-item index="1-1">
                        <router-link to='/list?type=ertong'>儿童</router-link>
                    </el-menu-item>
                      <el-menu-item index="1-2">
                        <router-link to='/list?type=dongman'>动漫</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to='/list?type=qingchunwenxue'>青春文学</router-link>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="2"><a href="#/home">首页</a></el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="20">
            <router-view></router-view>
        </el-col>
    </el-row>

    <!--<img src="./assets/logo.png">-->
    <!--<hello></hello>-->
    <!--<i class="el-icon-delete"></i>-->
    <!--<el-button type="primary" icon="search">搜索</el-button>-->
    <!--<a href="#/home"><i class="el-icon-edit"></i>首页</a>-->
    <!--<router-link to='/home'>Home</router-link>-->
    <!--<router-link to='/list?type=ertong'>List-儿童</router-link>-->
    <!--<router-link to='/list?type=dongman'>List-动漫</router-link>-->
    <!--<router-link to='/list?type=qingchunwenxue'>List-青春文学</router-link>-->
     <!--<div class="cantainer">-->
         <!--<router-view></router-view>-->
    <!--</div>-->
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;*/
}
.container{
    height:100%;
    background-color:orange;
    border:1px soild red;
}
</style>
