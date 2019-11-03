<template>
  <div class="navbar_main">
    <el-menu
      default-active="$route.name"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <div v-for="item in getRouterData" :key="item.meta.title">
        <div v-if=" !item.hidden && item.children">
          <el-submenu :index="item.path" v-if="item.children">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.meta.title}}</span>
            </template>

            <div v-for="val in item.children" :key="val.name">
              <el-submenu :index="val.path" v-if="val.children">
                <template slot="title">
                  <i :class="item.meta.icon">*</i>
                  <span>{{val.meta.title}}</span>
                </template>
                <el-menu-item
                  :index="sonItem.path"
                  v-for="sonItem in val.children"
                  :key="sonItem.path"
                >
                  <template slot="title">
                    <i :class="sonItem.meta.icon"></i>
                    <span>{{sonItem.meta.title}}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
              <el-menu-item :index="val.path" v-else>
                <template slot="title">
                  <i :class="item.meta.icon">*</i>
                  <span>{{val.meta.title}}</span>
                </template>
              </el-menu-item>
            </div>
          </el-submenu>

          <el-menu-item :index="item.path" v-else>
            <div></div>
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{item.meta.title}}</span>
            </template>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>
<script>
// import getMenuData from "./navmenu.config.js";
import getRouterData from "../../../router/index.js";
export default {
  data() {
    return {
      msg: "111",
      isCollapse: false,
      getRouterData: getRouterData.options.routes
    };
  },

  mounted: function() {
    this.getFetch();
  },
  methods: {
    getFetch: function() {
      this.getRouterData.shift();
      this.getRouterData = this.getRouterData;
    },
    andleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar_main {
  font-size: 15px;
  background-color: rgb(84, 92, 100);
  width: 200px;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
}
</style>