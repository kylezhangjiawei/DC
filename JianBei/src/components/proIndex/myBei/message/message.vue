<template>
    <div class="message">
      <header>
        <i class="icon-houtuijiantou"></i>
        <span :class="[nums === 1 ? 'activeFont':'']" @click="changeTab(1)">消息</span>
        <span :class="[nums === 2 ? 'activeFont':'']" @click="changeTab(2)">通知</span>
      </header>
      <div class="container">
        <div>
          <div>
            <img :src="headerIcon" alt="头像">
            <em>1</em>
            <dl>
              <dt><span>baby</span><span>跑步</span></dt>
              <dd>我对您的订单很感兴趣。我的特长：跑步...</dd>
            </dl>
          </div>
          <div>
            <span>1分钟前</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "message",
      data(){
        return{
          nums:1,
          headerIcon:require('../../../../../static/img/head@210x210.png'),
        }
      },
      methods:{
          /* 消息切换状态栏 */
          changeTab(val){
           this.nums = val;
          }
      }
    }
</script>

<style scoped lang="scss">
.message{
  header{
    height: .8rem;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: .01rem solid #D4D4D4;
    &>i{
      font-size: .36rem;
      position: absolute;
      left: .3rem;
      top: .15rem;
    }
    &>span{
      font-size: .36rem;
      color: #999999;
    }
    &>span:nth-of-type(1){
      margin-right: .5rem;
    }
    .activeFont{
      color: #333333;
    }
    .activeFont:before{
      content: "";
      display: block;
      position: absolute;
      bottom: -.03rem;
      width: .75rem;
      height: .06rem;
      background: #FF9F56;
      border-radius: .03rem;
    }
  }
  .container{
    padding-top: .8rem;
    &>div{
        height: 1.38rem;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        &>div:nth-of-type(1){
          display: flex;
          justify-content: center;
          padding-left: .3rem;
          align-items: center;
          position: relative;
          &>em{
            font-style: normal;
            position: absolute;
            top: .24rem;
            left: .86rem;
            font-size: .2rem;
            color: #ffffff;
            width: .24rem;
            height: .24rem;
            line-height: .24rem;
            text-align: center;
            border-radius: 50%;
            background-color: #FB4646;
          }
          &>img{
            width: .8rem;
            height: .8rem;
          }
          &>dl{
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-left: .1rem;
            &>dt{
              font-size: .28rem;
              color: #333333;
              margin-bottom: .1rem;
              &>span:nth-of-type(2){
                font-size: .3rem;
                color: #FF9F56;
                margin-left: .38rem;
              }
            }
            &>dd{
              font-size: .22rem;
              color: #666666;
            }
          }
        }
        &>div:nth-of-type(2){
          padding-right: .6rem;
          display: flex;
          &>span{
            margin-top: .25rem;
            color: #999999;
            font-size: .2rem;
          }
        }
      }
  }
}
</style>
