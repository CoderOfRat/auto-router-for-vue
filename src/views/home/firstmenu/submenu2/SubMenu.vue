<template>
  <div class="subMenu">
    <h3>目前您处于 第2级菜单视图，下方为第三级视图</h3>
    此处可以放置Tab切换 对应路由为他的直接子级路由
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
