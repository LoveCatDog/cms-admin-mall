<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>

    <div class="main-container clearfix">
      <Navbar />
      <PageMain />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue"; //左侧菜单栏目
import Sidebar from "./components/Sidebar.vue"; //顶部公共部分
import PageMain from "./components/PageMain.vue"; //右侧内容区域
export default {
  data() {
    return {
      msg: "左右栏目"
    };
  },
  components: {
    Navbar,
    Sidebar,
    PageMain
  }
};
</script>
<style lang="scss" scoped>
.main-container {
  margin-top: 60px;
}
</style>