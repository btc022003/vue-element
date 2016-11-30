<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <router-link to='/home'>Home</router-link>
    <router-link to='/list'>List</router-link>
     <div class="cantainer">
         <router-view></router-view>
    </div>
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
  margin-top: 60px;
}
.container{
    height:100%;
    background-color:orange;
    border:1px soild red;
}
</style>
