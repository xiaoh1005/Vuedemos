<template>
<div id="tab-bar">
    <slot></slot>
</div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name: 'TabBar',
  components:{
      TabBarItem
  }
}
</script>

<style>
#tab-bar {
  display: flex;
  background-color: #c7c6c6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 10);
}
</style>
