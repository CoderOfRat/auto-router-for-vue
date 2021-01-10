<template>
  <div class="firstMenu">
     <h3>目前您处于 第1级菜单</h3>
    第一层可点击路由对应的视图页>嵌套在home路由之下
    其子路由为submenu,可用于子路由的切换逻辑
    <!-- 子路由视图占位符 -->
    <router-link to="/home/firstmenu/submenu">显示二级菜单对应视图</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FirstMenu",
  data() {
    return {
      
    };
  },
  
};
</script>

<style scoped lang="less">
.home {
  height: 100%;
  background: #f3f2f2;
  
}

</style>
