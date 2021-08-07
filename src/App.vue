<!-- App.vue -->
<template>
  <div id="app">
		<!--在需要加载路由的地方，使用Vue组件route-view加载-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
</style>

