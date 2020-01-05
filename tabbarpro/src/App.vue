<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path='/home' activeColor="blue">
        <img src="~assets/img/tabbar/ok.svg" slot="item-icon" /> <!-- 取别名后 静态文件调用 在前面加~ -->
        <img src="~assets/img/tabbar/zzz.svg" slot="item-icon-active" />
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="~assets/img/tabbar/ok.svg" slot="item-icon" />
        <img src="~assets/img/tabbar/zzz.svg" slot="item-icon-active" />
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img src="~assets/img/tabbar/ok.svg" slot="item-icon" />
        <img src="~assets/img/tabbar/zzz.svg" slot="item-icon-active" />
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="~assets/img/tabbar/ok.svg" slot="item-icon" />
        <img src="~assets/img/tabbar/zzz.svg" slot="item-icon-active" />
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem

  }
}
</script>

<style>
@import url('assets/css/base.css');
</style>
