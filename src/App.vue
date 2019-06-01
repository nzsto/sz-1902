<template>
  <div id="app">
     <keep-alive>
         <router-view></router-view>
     </keep-alive>
      <TabBar v-if="$route.meta.TabBarFlag"/>
  </div>
</template>
<script>
  import TabBar from "@common/tabBar/TabBar"
  export default {
    name:"App",
    components:{
      TabBar
    }
  }
</script>
<style>

</style>
