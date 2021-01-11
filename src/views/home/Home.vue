<template>
  <div class="index_content">
    <el-header>
      <el-image
        style="width: 48px; height: 48px; margin-top: 6px"
        src="/favicon.ico"
        fit="fill"
      ></el-image>
      <h1>路由自动生成示例</h1>
    </el-header>
    <el-container>
      <el-aside width="380px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <section v-for="item in _routes" :key="item.name">
            <el-submenu :index="item.path" v-if="item.children.length > 0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.path }}</span>
              </template>
              <section v-for="sub in item.children" :key="sub.name">
                <el-submenu :index="sub._index" v-if="sub.children.length > 0">
                  <template slot="title">{{ sub._index }}</template>
                  <section v-for="subdeep in sub.children" :key="subdeep.name">
                    <el-submenu
                      :index="subdeep._index"
                      v-if="subdeep.children.length > 0"
                    >
                      <template slot="title">{{ subdeep._index }}</template>
                      <section
                        v-for="subdeepmore in subdeep.children"
                        :key="subdeepmore.name"
                      >
                        <el-menu-item :index="subdeepmore._index">{{
                          subdeepmore._index
                        }}</el-menu-item>
                      </section>
                    </el-submenu>
                    <el-menu-item :index="subdeep._index" v-else>{{
                      subdeep._index
                    }}</el-menu-item>
                  </section>
                </el-submenu>
                <el-menu-item :index="sub._index" v-else>{{
                  sub._index
                }}</el-menu-item>
              </section>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>
              <i class="el-icon-menu"></i>
              <span slot="title">{{ item.path }}</span>
            </el-menu-item>
          </section>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      activeIndex: "/home/homePage",
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
.index_content {
  height: 100%;
  background-color: #f1f3f4;
  .el-header {
    background-color: #545c64;
    display: flex;
    align-items: center;
    h1 {
      font-size: 28px;
      color: #fff;
    }
  }
  .el-container {
    height: calc(100vh - 62px);
    padding: 2px 0 0;
    .el-aside {
      height: calc(100vh - 62px);
      .el-menu-demo {
        height: calc(100% - 1px);
      }
    }
  }
}
</style>