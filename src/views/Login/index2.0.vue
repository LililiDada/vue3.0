<template>
  <div id="login">
    <div class="login-warp">
      <ul class="menu-tab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
      <!-- 表单开始 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-from"
        size="medium"
      >
        <el-form-item prop="username" class="item-from">
          <label>邮箱</label>
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item-from">
          <label>密码</label>
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            maxlength="20"
            minlength="6"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="passwords"
          class="item-from"
          v-show="model === 'register'"
        >
          <label>重复密码</label>
          <el-input
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            maxlength="20"
            minlength="6"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code" class="item-from">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input
                v-model.number="ruleForm.code"
                maxlength="6"
                minlength="6"
              ></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button
            type="danger"
            @click="submitForm('ruleForm')"
            class="block login-btn"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {
  stripscript,
  validateEmail,
  validatePass,
  validateCode,
} from "@/utils/validate";
export default {
  name: "login",
  data() {
    //   表单验证
    // 验证用户名
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (validateEmail(value)) {
        callback(new Error("用户名格式有误"));
      } else {
        callback();
      }
    };
    // 验证密码
    var validatePassword = (rule, value, callback) => {
      //过滤特殊字符
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;

      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (validatePass(value)) {
        callback(new Error("密码为6至20位的数字+字母"));
      } else {
        callback();
      }
    };
    // 验证验证码
    var checkCode = (rule, value, callback) => {
      //过滤特殊字符
      this.ruleForm.code = stripscript(value);
      value = this.ruleForm.code;

      if (!value) {
        return callback(new Error("请输入验证码"));
      } else if (validateCode(value)) {
        return callback(new Error("验证码格式有误"));
      } else {
        callback();
      }
    };
    // 验证重复密码
    var validatePasswords = (rule, value, callback) => {
      // 如果模块值为login，直接通过
      if (this.model === "login") {
        callback();
      }

      //过滤特殊字符
      this.ruleForm.passwords = stripscript(value);
      value = this.ruleForm.passwords;

      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.ruleForm.password) {
        callback(new Error("重复密码不正确"));
      } else {
        callback();
      }
    };
    return {
      menuTab: [
        { txt: "登录", current: true, type: "login" },
        { txt: "注册", current: false, type: "register" },
      ],
      //   模块的值
      model: "login",
      //   表单数据
      ruleForm: {
        username: "",
        password: "",
        passwords: "",
        code: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        passwords: [{ validator: validatePasswords, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
      },
    };
  },
  methods: {
    toggleMenu(data) {
      this.menuTab.forEach((item) => {
        item.current = false;
      });
      data.current = true;
      this.model = data.type;
    },
    // 表单方法
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
#login {
  height: 100vh;
  background-color: #344a5f;
  color: #ffffff;
}
.login-warp {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  margin: 0;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    border-radius: 2px;
    color: #ffffff;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.login-from {
  label {
    display: block;
    font-size: 14px;
    color: #fff;
    margin-bottom: 3px;
  }
  .item-from {
    margin-bottom: 13px;
  }
  .block {
    width: 100%;
    display: block;
  }
  .login-btn {
    margin-top: 20px;
  }
}
</style>
