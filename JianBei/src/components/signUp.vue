<template>
    <div class="signUp">
      <headers>
        <span slot="left" @click="goBack"><i class="icon-chacha"></i></span>
        <span slot="titles">注册</span>
      </headers>
      <div class="container">
        <p>
          <img :src="headerImg" alt="头像">
        </p>
        <!-- 账号密码输入区域 -->
        <div>
          <yd-cell-group>
            <yd-cell-item>
              <span slot="left">手机号</span>
              <yd-input slot="right"  required :show-success-icon="false" :show-error-icon="false" regex="mobile" placeholder="请输入账号"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">验证码</span>
              <input type="text" slot="right" placeholder="请输入验证码">
              <!-- ↓↓关键代码是这里↓↓ -->
              <yd-sendcode slot="right"
                           v-model="start1"
                           init-str="获取验证码"
                           @click.native="sendCode1"
                           type="warning"
              ></yd-sendcode>
              <!-- ↑↑关键代码是这里↑↑ -->

            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">新密码</span>
              <yd-input slot="right" type="password"  placeholder="请输入新密码"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">重复密码</span>
              <yd-input slot="right" type="password"  placeholder="请输入新密码"></yd-input>
            </yd-cell-item>
          </yd-cell-group>
          <span>
            <i class="icon-jian"></i>
            <span>你输入的两次密码不一致</span>
          </span>
        </div>
        <!-- 登陆按钮 -->
        <div>
          <button type="button">注册</button>
          <p>
            <yd-checkbox v-model="checkbox1">我已阅读并同意</yd-checkbox>
            <span>《捡贝网用户协议》</span>
          </p>
          <p>
            <span>注册遇到问题?</span>
            <span>联系客服</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "sign-up",
      data(){
        return{
          start1: false,
          headerImg:require('../../static/img/head@210x210.png'),
        }
      },
      methods:{
        sendCode1() {
          this.$dialog.loading.open('发送中...');
          setTimeout(() => {

            this.start1 = true;
            this.$dialog.loading.close();

            this.$dialog.toast({
              mes: '已发送',
              icon: 'success',
              timeout: 1500
            });

          }, 1000);
        },
        /* 后退 */
        goBack(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped lang="scss">
.signUp{
  background-color: #ffffff;
  height: 100%;
  .icon-chacha{
    color: #C2C2C2;
  }
  .isHeader{
    border-bottom: none;
  }
  .container{
    padding-top: .8rem;
    background-color: #ffffff;
    &>p{
      margin-top: .6rem;
      text-align: center;
      &>img{
        width: 2.1rem;
      }
    }
    &>div:nth-of-type(1){
      margin-top: .8rem;
      padding: 0 .8rem;
      .icon-jian{
        font-size: .27rem;
        vertical-align: text-bottom;
      }
      &>span{
        font-size: .22rem;
        color: #F04A4A;
      }
    }
    &>div:nth-of-type(2){
      margin-top: 1rem;
      text-align: center;
      &>button{
        width: 5.86rem;
        border-radius: .2rem;
        height: .8rem;
        background: -webkit-linear-gradient(left, #ffa158 , #ff483e); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #ffa158, #ff483e); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #ffa158, #ff483e); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #ffa158 , #ff483e); /* 标准的语法 */
        font-size: .34rem;
        outline: none;
        color: #ffffff;
        border: none;
      }
      &>p:nth-of-type(1){
        text-align: left;
        padding: 0 .8rem;
        margin-top: .24rem;
        font-size: .26rem;
        display: flex;
        &>span{
          color: #009FE8;
        }
      }
      &>p:nth-of-type(2){
        text-align: left;
        padding: 0 .8rem;
        margin-top: .24rem;
        font-size: .26rem;
        &>span:nth-of-type(1){
          color: #666666;
          margin-left: .44rem;
        }
        &>span:nth-of-type(2){
          color: #333333;
        }
      }
    }
  }
}
</style>
<style lang="scss">
  .signUp{
    .yd-cell-item{
      padding-left: 0;
    }
    .yd-cell-box{
      margin-bottom: 0;
    }
    .yd-cell-item:not(:last-child):after{
      margin-left: 0;
      border-bottom: 1px solid #C2C2C2;
    }
    .yd-cell:after{
      border-bottom: 1px solid #C2C2C2;
    }
    .yd-cell-left{
      margin-right: 0;
      width: 1.5rem;
    }
    .yd-btn-warning{
      background-color: #ffffff;
      color: #333333;
    }
    .yd-btn-disabled{
      background-color: #ffffff;
      color: #333333;
    }
    .yd-input-password-open:after{
      color: #b2b2b2;
    }
    .yd-btn{
      padding: 0;
    }
    .yd-cell-right{
      padding-right: 0;
    }
    .yd-cell-right .yd-datetime-input, .yd-cell-right input[type=date], .yd-cell-right input[type=datetime-local], .yd-cell-right input[type=email], .yd-cell-right input[type=number]:not(.yd-spinner-input), .yd-cell-right input[type=password], .yd-cell-right input[type=tel], .yd-cell-right input[type=text], .yd-cell-right input[type=time], .yd-cell-right input[type=url]{
      color: #333333;
    }
    /* placeholder颜色 */
    ::-webkit-input-placeholder { color:#cccccc; } /* chrome */
    ::-moz-placeholder { color:#cccccc; } /* firefox 19+ */
    :-ms-input-placeholder { color:#cccccc;  } /* ie */
    .yd-checkbox-icon{
      width: .24rem !important;
      height: .24rem !important;
      vertical-align: text-bottom;
    }
    .yd-checkbox{
      display: flex;
      align-items: center;
    }
    .yd-checkbox-text{
      font-size: .26rem;
      margin-left: .2rem;
    }
  }
</style>
