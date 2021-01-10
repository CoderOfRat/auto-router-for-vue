<template>
  <div class="deepMenuitem">
     <h3>目前您处于 第3级菜单 一般是二级界面下仍有树状导航、tab切换页等，
         可能需要多个接口数据时使用，这样可以在客户点击时才发送相应的请求，获取数据，
         也可以通过tab的切换事件配合编程式导航实现同样的效果。与tab页直接切换不同的是，
         单独的路由是一个单独的组件，可以控制不同tab页对应的不同样式、行为、生命周期操作、数据独立等</h3>
    第三层一般为第二层菜单视图页上的树状、次级导航、tab切换页对应的路由视图>嵌套在subMenu路由之下
  </div>
</template>

<script>
export default {
  name: "deepSubmenu",
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
