<template>
    <div class="signIn">
      <header>
        <span>登陆</span>
      </header>
      <div class="container">
        <p>
          <img :src="headerImg" alt="头像">
        </p>
        <!-- 账号密码输入区域 -->
        <div>
          <yd-cell-group>
            <yd-cell-item>
              <span slot="left">账号</span>
              <yd-input slot="right"  required :show-success-icon="false" :show-error-icon="false" regex="mobile" placeholder="手机号"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
              <span slot="left">密码</span>
              <yd-input slot="right" type="password"  placeholder="请输入6-20位密码"></yd-input>
            </yd-cell-item>
          </yd-cell-group>
        </div>
        <!-- 登陆按钮 -->
        <div>
          <button type="button" @click="goProIndex">确认</button>
          <p>
            <span @click="goSignUp()">快速注册</span><span @click="goRetrievePassword()">忘记密码?</span>
          </p>
        </div>
        <!-- 其他登陆方式 -->
        <div>
          <div></div>
          <p>其他登陆方式</p>
          <div></div>
        </div>
        <!-- 快捷登陆 -->
        <div>
          <dl>
            <dt>
              <img :src="QQImg" alt="QQ">
            </dt>
            <dd>
              QQ
            </dd>
          </dl>
          <dl>
            <dt>
              <img :src="wxImg" alt="微信">
            </dt>
            <dd>
              微信
            </dd>
          </dl>
          <dl>
            <dt>
              <img :src="wbImg" alt="微博">
            </dt>
            <dd>
              微博
            </dd>
          </dl>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "sign",
      data(){
          return{
            headerImg:require('../../static/img/head@210x210.png'),
            QQImg:require('../../static/img/qq@80x80.png'),
            wxImg:require('../../static/img/wechat@80x80.jpg'),
            wbImg:require('../../static/img/weibo@80x80.jpg')
          }
      },
      methods:{
          goProIndex(){
            this.$router.push({path:'/proIndex'});
          },
        /* 忘记密码 */
          goRetrievePassword(){
            this.$router.push({path:'/retrievePassword'});
          },
        /* 快速注册 */
          goSignUp(){
            this.$router.push({path:'/signUp'});
          }
      }
    }
</script>

<style scoped lang="scss">
.signIn{
  height: 100%;
  background-color: #ffffff;
  header{
  display: flex;
  justify-content: center;
  height: .8rem;
  font-size: .36rem;
  color: #333333;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  &>span{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
  .container{
    padding-top: .8rem;
    /*padding-bottom: .3rem;*/
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
      &>p{
        padding: 0 .8rem;
        display: flex;
        justify-content: space-between;
        margin-top: .24rem;
        font-size: .26rem;
        &>span:nth-of-type(1){
          color: #f04a4a;
        }
        &>span:nth-of-type(2){
          color: #666;
        }
      }
    }
    &>div:nth-of-type(3){
      margin-top: 2.4rem;
      text-align: center;
      font-size: .26rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &>p{
        margin: 0 .2rem;
      }
      &>div{
        width: 2rem;
        height: .01rem;
        background-color: #333333;
      }
    }
    &>div:nth-of-type(4){
      display: flex;
      justify-content: space-around;
      margin-top: .38rem;
      padding: 0 1.12rem;
      &>dl{
        &>dt{
          &>img{
            width: .8rem;
          }
        }
        &>dd{
          text-align: center;
          font-size: .24rem;
          margin-top: .14rem;
        }
      }
    }
  }
}
</style>
<style lang="scss">
  .signIn{
    .yd-cell-item{
      padding-left: 0;
    }
    .yd-cell-item:not(:last-child):after{
      margin-left: 0;
      border-bottom: 1px solid #999999;
    }
    .yd-cell:after{
      border-bottom: 1px solid #999999;
    }
    .yd-input-password-open:after{
      color: #b2b2b2;
    }
    .yd-cell-left{
      margin-right: .38rem;
    }
    .yd-cell-right .yd-datetime-input, .yd-cell-right input[type=date], .yd-cell-right input[type=datetime-local], .yd-cell-right input[type=email], .yd-cell-right input[type=number]:not(.yd-spinner-input), .yd-cell-right input[type=password], .yd-cell-right input[type=tel], .yd-cell-right input[type=text], .yd-cell-right input[type=time], .yd-cell-right input[type=url]{
      color: #333333;
    }
    /* placeholder颜色 */
    ::-webkit-input-placeholder { color:#cccccc; } /* chrome */
    ::-moz-placeholder { color:#cccccc; } /* firefox 19+ */
    :-ms-input-placeholder { color:#cccccc;  } /* ie */
  }
</style>
