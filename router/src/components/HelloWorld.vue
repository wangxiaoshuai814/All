<template>
<div>
    <li><router-link to='/home/senter'>路由1</router-link></li>
     <router-view></router-view>
    <!-- <li><router-link to="/word/router2">路由2</router-link></li> -->
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
