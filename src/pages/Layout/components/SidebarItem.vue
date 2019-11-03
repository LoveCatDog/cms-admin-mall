<template>
  <div class="menu-wrapper">
    <div v-for="item in routes" :key="item.path">
      <div v-if="!item.hidden && item.children">
        <router-link
          :to="item.children[0].path"
          v-if="hasOneShowingChildren(item.children) && !item.children[0].children"
          :key="item.children[0].path"
        >
          <el-menu-item style="text-align: left;">
            <svg-icon
              v-if="item.children[0].meta && item.children[0].meta.icon"
              :icon-class="item.children[0].meta.icon"
            ></svg-icon>

            <span
              v-if="item.children[0].meta && item.children[0].meta.title"
              slot="title"
            >{{item.children[0].meta.title}}</span>
          </el-menu-item>
        </router-link>
        <el-submenu v-else :index="item.name||item.path" :key="item.meta.title">
          <template slot="title">
            <div style="text-align: left;">
              <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
              <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
            </div>
          </template>

          <div v-for="child in item.children" :key="child.meta.title">
            <div v-if="!child.hidden">
              <sidebar-item
                :is-nest="true"
                class="nest-menu"
                v-if="child.children&&child.children.length>0"
                :routes="[child]"
                :key="child.path"
              ></sidebar-item>
              <router-link v-else :to="child.path" :key="child.name">
                <el-menu-item :index="child.path">
                  <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                  <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </div>
          </div>
        </el-submenu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  mounted: function() {
    this.getFeath();
  },
  methods: {
    getFeath() {
      console.log("wujia", this.routes);
    },
    // 过滤出只有一个孩子
    hasOneShowingChildren(children) {
      const showingChildren = children.filter(item => {
        return !item.hidden;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style scoped>
.el-submenu__title {
  text-align: left !important;
}
.svg-icon {
  margin-right: 16px;
}
</style>
