<template>
  <div class="firstMenu">
    <h3>目前您处于 第1级菜单 下方为第二级视图部分</h3>
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
