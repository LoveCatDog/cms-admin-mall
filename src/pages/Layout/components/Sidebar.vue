<template>
  <div class="sidebar_main">
    <header>
      <div class="navbar">
        <div class="logo-info flex">
          <img src="@/assets/images/logo1.png" class="logo" />
          <p class="title">商城后台管理系统</p>
        </div>
        <div class="user-info flex">
          <img src="@/assets/images/user_header_logo.png" class="user-img" />
          <span class="user-name">会吃鱼的猫</span>
          <router-link to="/login">
            <el-button plain class="exit-btn">退出</el-button>
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.sidebar_main {
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    right: 0;
    height: 60px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #59a5e6;
    border-bottom: 1px solid #eaecef;
    padding: 10px 20px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-info {
      position: relative;
      cursor: pointer;
      color: #fff;
      font-size: 20px;
      .logo {
        width: 34px;
        margin-right: 10px;
      }
    }
    .user-info {
      // flex: 1 1;
      .nav-title {
        margin-left: 30px;
        color: #fff;
      }
      .user-img {
        width: 30px;
        box-shadow: 0px 0px 2px #fff;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.7);
        margin-right: 10px;
        cursor: pointer;
      }
      .user-name {
        margin-right: 30px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>