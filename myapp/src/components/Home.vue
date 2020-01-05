<template>
  <div>
    <h1>Home ...</h1>
    <router-link to="/home/news">news</router-link> |||
    <router-link to="/home/news2">news2</router-link>
    <keep-alive> <router-view /> </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home'
  // created(){//组件创建 回调的生命周期函数

  // },
  // mounted(){//挂载到dom 回调的生命周期函数

  // },
  // updated(){// 界面刷新 回调的生命周期函数

  // },

  //组件激活状态函数 结合<keep-alive>标签使用 没有则不会调动该2函数
  // activated(){
  //     //组件激活
  // },
  // deactivated(){
  //     //组件未激活
  // }
  
}
</script>

<style></style>
