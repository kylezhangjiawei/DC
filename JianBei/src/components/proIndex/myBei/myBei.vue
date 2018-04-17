<template>
    <div class="myBei">
      <header :style="{background:headerBackImg}">
        <p>
          <span class="icon-shezhi" @click="goSet()"></span>
          <span class="icon-iconfontzhizuobiaozhun023110" @click="goMessage()"><i></i></span>
        </p>
        <div>
          <div>
            <img :src="headerIcon" alt="头像">
            <dl>
              <dt>130******95</dt>
              <dd :style="{background:memberIcon}">会员等级：1</dd>
            </dl>
          </div>
          <div>
            <span>信用积分：70.0</span>
          </div>
        </div>
      </header>
      <!-- 内容主体 -->
      <div class="container">
        <!-- navList -->
        <div>
          <dl v-for="(item,index) in navImgList">
            <dt>
              <img :src="item.img" :alt="item.name">
            </dt>
            <dd>{{item.name}}</dd>
          </dl>
        </div>
        <!-- list -->
        <div>
          <div>
            <span>
              <i class="icon-shoucang1"></i>
              <em>我的收藏</em>
            </span>
            <span class="icon-jiantou"></span>
          </div>
          <div>
            <span>
              <i class="icon-bangzhu"></i>
              <em>帮助中心</em>
            </span>
            <span class="icon-jiantou"></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my-bei",
      data(){
          return{
            headerBackImg:'url(' + require('../../../../static/img/bj.jpg') + ')0 0 /cover no-repeat',
            headerIcon:require('../../../../static/img/head@210x210.png'),
            memberIcon:'url(' + require('../../../../static/img/VIP@170x36.png') + ')0 0 /contain no-repeat',
            navImgList:[
              {
                name:'钱包',
                img:require('../../../../static/img/qianbao@46x48.png')
              },
              {
                name:'主页',
                img:require('../../../../static/img/zhuye@46x48.png')
              },
              {
                name:'订单',
                img:require('../../../../static/img/dingdan@46x48.png')
              },
              {
                name:'邀请',
                img:require('../../../../static/img/yaoqing@46x48.png')
              }
            ],
          }
      },
      methods:{
          /* 个人中心 */
          goSet(){
            this.$router.push({path:'/seting'});
          },
        /* 个人消息中心 */
        goMessage(){
          this.$router.push({path:'/message'});
        }
      }
    }
</script>

<style scoped lang="scss">
.myBei{
  height: 100%;
  header{
    height: 3.2rem;
    overflow: hidden;
    &>p{
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      padding: .3rem;
      &>span{
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: .44rem;
      }
      &>span:nth-of-type(2){
        position: relative;
        &>i{
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          width: .1rem;
          height: .1rem;
          background-color: #FF5D41;
          border-radius: 50%;
        }
      }
    }
    &>div{
      display: flex;
      justify-content: space-between;
     &>div:nth-of-type(1){
       display: flex;
       justify-content: center;
       padding-left: .3rem;
       &>img{
         width: 1.2rem;
         height: 1.2rem;
       }
       &>dl{
         display: flex;
       justify-content: center;
         flex-direction: column;
         &>dt{
           font-size: .3rem;
           color: #FFFFFF;
           margin-bottom: .1rem;
         }
         &>dd{
           font-size: .2rem;
           color: #FFFFFF;
           width: 1.7rem;
           height: .36rem;
           display: flex;
           justify-content: center;
           text-align: right;
           flex-direction: column;
           padding-right: .15rem;
         }
       }
     }
      &>div:nth-of-type(2){
        padding-right: .6rem;
        display: flex;
        &>span{
          margin-top: .25rem;
          padding: 0 .1rem;
          line-height: .4rem;
          height: .4rem;
          border: .01rem solid #ffffff;
          border-radius: .06rem;
          color: #ffffff;
          font-size: .2rem;
          text-align: center;
        }
      }
    }
  }
  .container{
    padding-bottom: 1.2rem;
    &>div:nth-of-type(1){
      display: flex;
      height: 1.6rem;
      align-items: center;
      background-color: #ffffff;
      font-size: .26rem;
      justify-content: space-around;
      &>dl{
        &>dt{
          text-align: center;
          &>img{
            width: .42rem;
            height: .42rem;
          }
        }
      }
    }
    &>div:nth-of-type(2){
      background-color: #ffffff;
      margin-top: .2rem;
      &>div{
        height: .9rem;
        border-bottom: 0.01rem solid #E3E3E3;
        display: flex;
        justify-content: space-between;
        padding: 0 .3rem;
        &>span:nth-of-type(1){
          display: flex;
          justify-content: center;
          &>i{
            font-size: .36rem;
            color: #FFAB76;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          &>em{
            font-style: normal;
            font-size: .3rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            margin-left: .2rem;
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
    }
  }
}
</style>
