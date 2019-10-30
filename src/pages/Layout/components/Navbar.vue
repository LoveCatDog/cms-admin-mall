<template>
  <div class="navbar_main">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="$route.name"
          :router="true"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <div v-for="item in getRouterData" :key="item.meta.title">
            <el-submenu :index="item.path" v-if="item.children">
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
              </template>
              <el-menu-item :index="val.path" v-for="val in item.children" :key="val.name">
                <template slot="title">
                  <i :class="item.meta.icon">*</i>
                  <span>{{val.meta.title}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
              </template>
            </el-menu-item>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import getMenuData from "./navmenu.config.js";
import getRouterData from "../../../router/index.js";
export default {
  data() {
    return {
      msg: "111",
      getRouterData: getRouterData.options.routes
    };
  },

  mounted: function() {
    this.getFetch();
  },
  methods: {
    getFetch: function() {}
  }
};
</script>
<style lang="scss" scoped>
.navbar_main {
  border: 1px solid blue;
  font-size: 15px;
  background-color: #fff;
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