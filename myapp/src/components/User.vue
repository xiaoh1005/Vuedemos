<template>
  <div>
      <h1>我是{{userId}}</h1>
  </div>
</template>

<script>
export default {
    name:'User',
    computed:{
        userId(){
            return this.$route.params.userId  //动态路由获取用户id // App data.userId-->url:userId-->route.params-->{{}}
        }
    }
}
</script>

<style>

</style>