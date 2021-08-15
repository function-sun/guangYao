<template>
  <div class="loginPic">
      <div class="login_left">
          <p>Welcome!</p>
          <p class="title">光耀电力智能营销管理系统</p>
      </div>
      <div class="login_right">
          <p class="loginTit">账号登录</p>
          <div class="loginUser">
              <el-input v-model="inputUser" placeholder="请输入手机号/邮箱" @keypress.native.enter="onEnterPress">
                  <i slot="prefix" class="icon-user"></i>
              </el-input>
          </div>
          <div class="loginMima">
              <el-input type="password" v-model="inputMima" placeholder="请输入密码" @keypress.native.enter="onEnterPress">
                  <i slot="prefix" class="icon-mima"></i>
              </el-input>
          </div>
          <div class="loginYanzhengma">
              <el-input type="password" v-model="inputYanzhengma" placeholder="请输入验证码">
                  <i slot="prefix" class="icon-yanzhengma"></i>
              </el-input>
              <div class="login-code">
                <img :src="codeUrl" @click="getCode" class="login-code-img"/>
              </div>
          </div>
          <el-checkbox v-model="ememberMe" style="margin: 10px 0 0 30px;">记住密码</el-checkbox>
          <el-button class="loginBtn" v-loading="loading" @click.native.prevent="handleLogin" @keypress.native.enter="onEnterPress">
                <span v-if="!loading">登 录</span>
                <span v-else>登 录 中...</span>
          </el-button>
      </div>
      <!--  底部  -->
        <div class="loginFooter">
            <span>Copyright © 2021-2022 GuangYaoDianLi All Rights Reserved.</span>
        </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
export default {
    name: 'login',
    data() {
        return {
            inputUser:'',
            inputMima:'',
            inputYanzhengma:'',
            codeUrl:'',
            ememberMe:false,
            loading:false,
            loginText: ''
        }
    },
    created() {
        this.getCode();
        // this.getCookie();
    },
    methods:{
        getCode() {
            let that = this
            let url = '/captchaImage'
            // that.$http.get_login(url).then(res => {// 返回流的形式需要加responseType
            that.$http.get(url).then(res => {
                if (res.msg === "操作成功") {
                    // this.codeUrl = window.URL.createObjectURL(res) // 返回流的形式
                    this.codeUrl = "data:image/gif;base64," + res.img; //返回base64形式
                    this.loginText = res.text
                }
            });
        },
        getCookie() {
            const username = window.sessionStorage.getItem('username'); // 存入一个值
            const password = window.sessionStorage.getItem('password'); // 存入一个值
            this.inputUser = username === undefined ? this.inputUser : username
            this.inputMima = password === undefined ? this.inputMima : password //decrypt(password)加密
        },
        onEnterPress(e) {
            this.handleLogin()
        },
        handleLogin() {
            if (this.loginText === this.inputYanzhengma) {
                if (this.inputUser && this.inputMima) {
                    this.toLogin(this.inputUser, this.inputMima)
                    // if (this.inputUser === 'admin' && this.inputMima === '123456') {
                    //     window.sessionStorage.setItem('username',this.inputUser); // 存入一个值
                    //     window.sessionStorage.setItem('password',this.inputMima); // 存入一个值
                    //     // Cookies.set("password", encrypt(this.inputMima), { expires: 30 }); // 通过jsencrypt进行加密
                    //     this.$router.push({ path: "/index" })
                    // } else {
                    //     this.inputUser === ''
                    //     this.inputMima === ''
                    //     this.$message('账号或密码不正确，请重新输入');
                    // }
                } else {
                    this.$message('请输入账号或密码');
                }
            } else {
                this.getCode()
                this.$message('验证码验证失败，请重新输入');
            }
        },
        //登录接口
        toLogin(name, pass) {
            let that = this
            let url = '/toLogin'
            let params={
                username: name,
                password:pass
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas=>{
                console.log(datas)
                if (datas) {
                    // window.sessionStorage.setItem('token',datas.token);
                    setToken(datas.token)
                    this.$router.push({ path: "/index" })
                    window.location.reload();
                }
            })
        },
        parseParam(param){
            var paramStr = ""
            for(let i in param) {
                paramStr += i + "=" + encodeURIComponent(param[i]) + '&';
            }
            
            return paramStr.substring(0, paramStr.length-1).toString()
        }
    }
}
</script>

<style lang="less">
@media screen and (max-width: 1200px) {
    .loginPic{
        .login_left {
            display: none;
        }
    }
}
body{
    background-image: url('../assets/windFramPicture/login2.png');
    background-position: 0 0;
    background-repeat: no-repeat;
}
.loginPic{
    display: flex;
    .login_left{
        position: fixed;
        left: 15%;
        top: 30%;
        p{
            margin-bottom: 0px;
            font-size: 32px;
            color: #fff;
            margin-top: 10px;
        }
        .title{
            letter-spacing: 5px;
        }
    }
    .login_right{
        width: 350px;
        height:400px;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.2);
        position: fixed;
        right: 15%;
        top: 20%;
        .loginTit{
            font-size: 18px;
            text-align: center;
            color: #fff;
            margin: 30px 0;
        }
        .loginUser{
            margin: 0 30px 30px 30px;
            border-bottom: 1px solid #fff;            
            .el-input{
                .el-input__inner{
                    background: none;
                    border: none;
                    color: #fff;
                }
                .el-input__prefix{
                    .icon-user{
                        width: 27px;
                        height: 24px;
                        display: inline-block;
                        background-image: url(../assets/iconNeed/iconFont.png);
                        background-position: -13px -70px;
                        position: absolute;
                        left: -7px;
                        top: 5px;
                    }
                }
            }
        }
        .loginMima{
            margin: 0 30px 30px 30px;
            border-bottom: 1px solid #fff;            
            .el-input{
                .el-input__inner{
                    background: none;
                    border: none;
                    color: #fff;
                }
                .el-input__prefix{
                    .icon-mima{
                        width: 27px;
                        height: 24px;
                        display: inline-block;
                        background-image: url(../assets/iconNeed/iconFont.png);
                        background-position: -44px -70px;
                        position: absolute;
                        left: -7px;
                        top: 5px;
                    }
                }
            }
        }
        .loginYanzhengma{
            display:flex;
            margin: 0 30px 0 30px;
            border-bottom: 1px solid #fff;     
            .login-code{
                width:100px;
                height:35px;
                .login-code-img{
                    width:100px;
                }
            }       
            .el-input{
                .el-input__inner{
                    background: none;
                    border: none;
                    color: #fff;
                }
                .el-input__prefix{
                    .icon-yanzhengma{
                        width: 27px;
                        height: 24px;
                        display: inline-block;
                        background-image: url(../assets/iconNeed/iconFont.png);
                        background-position: -74px -70px;
                        position: absolute;
                        left: -7px;
                        top: 5px;
                    }
                }
            }
        }
        .el-checkbox{
            .el-checkbox__label{
                color: #fff;
                font-size: 12px;
                padding-left:6px;
            }
        }
        .loginBtn{
            position: absolute;
            left: 30px;
            bottom: 35px;
            width: 294px;
            height: 34px;
            background-image: linear-gradient(to right, #5a91f6, #6656ff);
            border:none;
            color:#fff;
        }
    }
    .loginFooter{
        height: 40px;
        line-height: 40px;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: #fff;
        font-family: Arial;
        font-size: 12px;
        letter-spacing: 1px;
    }
}
</style>