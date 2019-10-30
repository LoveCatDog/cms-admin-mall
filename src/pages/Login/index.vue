<template>
  <div class="login_wrap">
    <div class="login_bj">
      <!-- <img class="header_logo" src="@/assets/images/logo.png" /> -->
      <p class="header_title">商城后台管理系统</p>
    </div>
    <div class="login_box">
      <div class="left_box">
        <div>
          <img src="@/assets/images/login_mall1.png" />
        </div>
      </div>
      <div class="right_box">
        <el-form label-width="80px">
          <el-form-item>
            <p class="enter">登录后台入口</p>
          </el-form-item>
          <el-form-item>
            <el-input
              prefix-icon="el-icon-user-solid"
              v-model="account_input"
              placeholder="请输入账号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              prefix-icon="el-icon-view"
              placeholder="请输入密码"
              v-model="password_input"
              show-password
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <router-link to="/home">
              <el-button size="medium" native-type="submit" type="primary" style="width:100%">登录</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account_input: "", //账号
      password_input: "" //密码
    };
  }
};
</script>
<style lang="scss" scoped>
.login_wrap {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(238, 238, 238);

  .login_bj {
    background: url(../../assets/images/login_bj.png) no-repeat center center;
    min-width: 1200px;
    height: 50%;
    text-align: center;
    .header_title {
      color: #eee;
      font-size: 60px;
      padding: 6% 0 0;
    }
    .header_logo {
      width: 300px;
      padding: 1% 0 0;
    }
  }
  .login_box {
    width: 890px;
    height: 350px;
    background: rgba(255, 255, 255, 0.4);
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin: -130px auto auto;
    box-sizing: border-box;
    padding: 54px 100px 60px;
    .left_box {
      float: left;
      margin-top: -18px;
      width: 250px;
      margin-right: 66px;
      img {
        width: 100%;
      }
    }

    .right_box {
      float: left;
      width: 350px;
      .enter {
        font-size: 25px;
        color: #fff;
      }
    }
  }
}
</style>