<template>
  <div class="subMenu">
     <h3>目前您处于 第2级菜单</h3>
    第二层可点击路由对应的视图页>嵌套在firstMenu路由之下
    其子路由为deepsubmenu,可用于子路由的切换逻辑如可切换的tab
    <router-link to="/home/firstmenu/submenu/deepSubmenu">显示tab切换内容</router-link>
    <!-- 子路由视图占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
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
