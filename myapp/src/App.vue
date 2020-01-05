<template>
  <div id="app">
    <router-link to="/home" tag="button">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/about2">About2</router-link> | <router-link :to="'/user/' + userId">Me</router-link> |
    <!--  http://127.0.0.1:8080/profile?name=xiaohong&id=123112 查询路径 ？ not restful?-->
    <router-link :to="{ path: '/profile', query: { name, id } }">Profile</router-link> |
    <button @click="profileClick">Profile2</button> | <button @click="homeClick">Home</button> |
    <button @click="aboutClick">About</button> |
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'xhhhhh',
      name:'xiaohong',
      id: '123112'
    }
  },
  methods: {
    homeClick() {
      //this.$router.push('/home) //可以返回 ==> history.pushState()
      this.$router.replace('/home')
    },
    aboutClick() {
      this.$router.replace('/about')
    },
    profileClick() { // query 传参 法二
      this.$router.replace({
        path: '/profile',
        query: {
          name:this.name,
          id:this.id 
          
        }
      })
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
