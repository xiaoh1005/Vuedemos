<template>
  <div>
    <h2>im profile ......</h2>
    <h2>{{ name }}</h2>
    <h2>{{ id }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      name: this.$route.query.name,//query 传参 注意App.vue中的<router-link>路径写法
      id: this.$route.query.id
    }
  }
}
</script>

<style></style>
