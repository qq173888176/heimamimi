<template>
  <div class="login">
    <div class="leftbox">
      <div class="title">
        <img class="titleimg" src="../../assets/矢量智能对象 拷贝 9.png" alt />
        <span class="titlenaem">黑马面面</span>
        <span class="titleline"></span>
        <span class="titlelogin">用户登录</span>
      </div>

      <div id="app">
        <!-- el-form：对应的是表单 -->
        <!-- ref：可以通过 ref 来得到 form 元素 -->
        <!-- model：当前 form 绑定的数据源 -->
        <!-- label-width：左侧的文本的宽度 -->
        <el-form class="loginform" ref="form" :model="form" label-width="0">
          <!-- el-form-item: 表单中的一个部分：表单域 -->
          <!-- label：当前表单元素的说明标题 -->
          <el-form-item>
            <el-input v-model="form.phone" placeholder="请输入手机号" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>

          <el-row>
            <el-col :span="16">
              <el-input v-model="form.logincode" placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="8">
              <img class="loginCode" src="../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>

          <el-form-item class="checkboxheight">
            <el-checkbox v-model="form.isCheck" name="type">
              我已阅读并同意
              <el-link type="primary">用户协议</el-link>和
              <el-link type="primary">隐私条款</el-link>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button class="loginbnt" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="loginbnt" type="primary">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <img class="rightimg" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        type: ""
      }
    };
  }
};
</script>
<style lang="less">
.login {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  .leftbox {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 42px 86px;
    box-sizing: border-box;
    .title {
      display: flex;
      align-items: center;
      .titleimg {
        width: 22px;
        height: 17px;
      }
      .titlenaem {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 16px;
        margin-right: 14px;
      }
      .titleline {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .titlelogin {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .loginform {
      margin: 29px;
    }
    .loginCode {
      width: 100%;
      height: 40px;
    }
    .checkboxheight {
      height: 20px;
    }
    .loginbnt{
      width: 100%;
    }
  }

  .rightimg {
    width: 633px;
    height: 435px;
  }
}
</style>