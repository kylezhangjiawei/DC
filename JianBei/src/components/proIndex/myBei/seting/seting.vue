<template>
    <div class="seting">
      <headers>
        <span slot="left" @click="goBack"><i class="icon-houtuijiantou"></i></span>
        <span slot="titles">账户设置</span>
      </headers>
      <!-- 内容主体 -->
      <div class="container">
        <div>
          <span>
            <img :src="headerIcon" alt="头像">
            <span>130******95</span>
          </span>
          <span class="icon-jiantou"></span>
        </div>
        <div>
          <div>
            <span>消息推送</span>
            <span>
              <yd-switch v-model="switch1"></yd-switch>
            </span>
          </div>
          <div>
            <span>账户与安全</span>
            <span class="icon-jiantou"></span>
          </div>
        </div>
        <div>
          <div>
            <span>意见反馈</span>
            <span class="icon-jiantou"></span>
          </div>
          <div>
            <span>关于我们</span>
            <span class="icon-jiantou"></span>
          </div>
        </div>
        <div>
          <button type="button">退出登陆</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "seting",
      data(){
          return{
            headerIcon:require('../../../../../static/img/head@210x210.png'),
            switch1:false
          }
      },
      methods:{
          goBack(){
            this.$router.go(-1);
          }
      }
    }
</script>

<style scoped lang="scss">
.seting{
  height: 100%;
  .container{
    padding-top: .8rem;
    &>div:nth-of-type(1){
      height: 1.4rem;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      padding: 0 .3rem;
      &>span:nth-of-type(1){
        display: flex;
        align-items: center;
        &>img{
          width: .9rem;
          height: .9rem;
        }
        &>span{
          font-size: .3rem;
          margin-left: .05rem;
        }
      }
      &>span:nth-of-type(2){
        font-size: .36rem;
        color: #BDBCBC;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
    }
    &>div:nth-of-type(2){
      background-color: #ffffff;
      padding: 0 .3rem;
      margin-top: .2rem;
      &>div{
        display: flex;
        justify-content: space-between;
        height: .9rem;
        border-bottom: .01rem solid #E6E6E6;
        &>span{
          display: flex;
          justify-content: center;
          flex-direction: column;
          font-size: .3rem;
        }
        &>span:nth-of-type(2){
          color: #BDBCBC;
        }
      }
    }
    &>div:nth-of-type(3){
      background-color: #ffffff;
      padding: 0 .3rem;
      margin-top: .2rem;
      &>div{
        display: flex;
        justify-content: space-between;
        height: .9rem;
        border-bottom: .01rem solid #E6E6E6;
        &>span{
          display: flex;
          justify-content: center;
          flex-direction: column;
          font-size: .3rem;
        }
        &>span:nth-of-type(2){
          color: #BDBCBC;
        }
      }
    }
    &>div:nth-of-type(4){
      margin-top: 1rem;
      padding:  0 .3rem;
      &>button{
        width: 100%;
        border: none;
        height: .8rem;
        background-color: #FF9F56;
        font-size: .3rem;
        color: #ffffff;
        border-radius: .2rem;
      }
    }
  }
}
</style>
