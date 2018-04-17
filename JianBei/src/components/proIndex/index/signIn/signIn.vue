<template>
    <div class="signIns">
      <header :style="{background:headerBackImg}">
        <p>
          <span><i class="icon-houtuijiantou" @click="goBack()"></i></span>
          <span>签到</span>
        </p>
        <div>
          <p>1月</p>
          <p>
            <span class="shell" :style="{background:shellBackImg}">1</span>
            <span class="shell" :style="{background:shellBackImg}">2</span>
            <span class="shell" :style="{background:shellBackImg}">3</span>
            <span class="now">4</span>
            <span class="icon-gift_icon"></span>
            <span class="normals">6</span>
            <span class="normals">7</span>
            <span class="normals">8</span>
          </p>
        </div>
        <div>
          <div>
            <p><em>1</em>沙粒</p>
            <p>已连续签到23天</p>
          </div>
          <div class="notSign">
            <p>
              <span @click="toSign = true">签到</span>
            </p>
          </div>
        <!--  <div class="itsSign">
            <span>再签三天有惊喜</span>
          </div>-->
        </div>
      </header>
      <!-- 内容框 -->
      <div class="container">
        <!-- 轮播图 -->
        <div>
          <yd-slider autoplay="3000">
            <yd-slider-item>
                <img :src="slideShowImg">
            </yd-slider-item>
            <yd-slider-item>
              <img :src="slideShowImg">
            </yd-slider-item>
            <yd-slider-item>
              <img :src="slideShowImg">
            </yd-slider-item>
          </yd-slider>
        </div>
        <!-- 条幅图 -->
        <div>
          <img :src="signBackImg" alt="条幅图">
        </div>
        <!-- 任务区 -->
        <div>
          <p>每日任务</p>
          <div>
            <div>
              <div>
                <img :src="rechargeIcon" alt="奖励">
                <span>
                <em>今日充值达5元</em>
                <em>20 沙粒奖励</em>
              </span>
              </div>
              <div>
                <span class="noDone">未完成</span>
              </div>
            </div>
            <div>
              <div>
                <img :src="rechargeIcon" alt="奖励">
                <span>
                <em>今日充值达5元</em>
                <em>20 沙粒奖励</em>
              </span>
              </div>
              <div>
                <!--<span class="noDone">未完成</span>-->
                <span class="isDone">已完成</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- 签到弹出框 -->
      <modal v-if="toSign">
        <div slot="body" class="isBodys">
          <img :src="signImg" alt="签到">
          <span>获得<em>1</em>颗沙粒</span>
          <span>已连续签到<em>23</em>天,再签到<em>三天</em>有惊喜</span>
          <img :src="closeImg" alt="关闭" @click="toSign=false">
        </div>
      </modal>
    </div>
</template>

<script>
    export default {
        name: "sign-in",
      data(){
          return{
            headerBackImg:'url(' + require('../../../../../static/img/bg01.png') + ')0 0 /cover no-repeat',
            shellBackImg:'url(' + require('../../../../../static/img/icon_bei@2x.png') + ')0 0 /cover no-repeat',
            toSign:false,
            signImg:require('../../../../../static/img/pop@2x.png'),
            closeImg:require('../../../../../static/img/icon_off@2x.png'),
            slideShowImg:require('../../../../../static/img/bg02@2x.png'),
            signBackImg:require('../../../../../static/img/bg03@2x.png'),
            rechargeIcon:require('../../../../../static/img/icon_task@2x.png')
          }
      },
      methods:{
        /* 后退 */
        goBack(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped lang="scss">
.signIns{
  header{
    height: 4.1rem;
    overflow: hidden;
    &>p{
      height: .8rem;
      display: flex;
      justify-content: center;
      position: relative;
      font-size: .36rem;
      color: #ffffff;
      &>span{
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      &>span:nth-of-type(1){
        position: absolute;
        top: .15rem;
        left: .3rem;
        &>i{
          font-size: .36rem;
        }
      }
    }
    &>div:nth-of-type(1){
      margin-top: .55rem;
      &>p:nth-of-type(1){
        text-align: center;
        color: #ffffff;
        font-size: .26rem;
      }
      &>p:nth-of-type(2){
        height: .8rem;
        display: flex;
        align-items: center;
        color: #ffffff;
        font-size: .3rem;
        margin-top: .26rem;
        .shell{
          width: .64rem;
          height: .45rem;
          line-height: .45rem;
          text-align: center;
          opacity: .5;
          margin-left: .38rem;
        }
        .now{
          width: .62rem;
          height: .62rem;
          text-align: center;
          line-height: .55rem;
          border: .03rem solid #FFC072;
          border-radius: 50%;
          margin-left: .38rem;
        }
        .icon-gift_icon{
          color: #ffffff;
          margin-left: .38rem;
          font-size: .46rem;
        }
        .normals{
          margin-left: .5rem;
        }
      }
    }
    &>div:nth-of-type(2){
      display: flex;
      justify-content: space-between;
      padding: 0 .38rem;
      color: #ffffff;
      height: 1.3rem;
      &>div:nth-of-type(1){
        display: flex;
        justify-content: center;
        flex-direction: column;
        &>p:nth-of-type(1){
          color: #FFC072;
          font-size: .24rem;
          &>em{
            font-style: normal;
            font-size: .34rem;
            margin-right: .05rem;
          }
        }
        &>p:nth-of-type(2){
          display: flex;
          justify-content: center;
          flex-direction: column;
          font-size: .24rem;
        }
      }
      .notSign{
        display: flex;
        justify-content: center;
        flex-direction: column;
        &>p{
          background-color: #7683AA;
          width: 1.18rem;
          height: 1.18rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          &>span{
            display: inline-block;
            width: .98rem;
            height: .98rem;
            text-align: center;
            line-height: .98rem;
            font-size: .3rem;
            border-radius: 50%;
            background: -webkit-linear-gradient(#F6C881, #FE786D); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#F6C881, #FE786D); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#F6C881, #FE786D); /* Firefox 3.6 - 15 */
            background: linear-gradient(#F6C881, #FE786D); /* 标准的语法 */
          }
        }

      }
      .itsSign{
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: .3rem;
        color: #ffffff;
        &>span{
          padding: .1rem .2rem;
          border-radius: .3rem;
          background-color: #FFC072;
        }
      }
    }
  }
  .container{
    padding-bottom: .8rem;
    &>div:nth-of-type(2){
      padding: .1rem .3rem;
      &>img{
        height: 1.68rem;
        box-shadow:0px 0px 8px rgba(7,17,47,0.1);
      }
    }
    &>div:nth-of-type(3){
      &>p{
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: .88rem;
        font-size: .3rem;
        padding: 0 .3rem;
        border-bottom: 1px solid #e6e6e6;
        background-color: #ffffff;
      }
      &>div{
        background-color: #ffffff;
        padding: 0 .3rem;
        &>div{
          display: flex;
          justify-content: space-between;
          height: 1.26rem;
          border-bottom: 1px solid #e6e6e6;
          &>div:nth-of-type(1){
            display: flex;
            align-items: center;
            &>img{
              width: .94rem;
              height: .9rem;
            }
            &>span{
              display: flex;
              justify-content: center;
              flex-direction: column;
              padding-left: .2rem;
              &>em{
                font-style: normal;
              }
              &>em:nth-of-type(1){
                font-size: .28rem;
                margin-bottom: .1rem;
              }
              &>em:nth-of-type(2){
                font-size: .22rem;
                color: #ff9f56;
              }
            }
          }
          &>div:nth-of-type(2){
            display: flex;
            align-items: center;
            .noDone{
              display: flex;
              justify-content: center;
              flex-direction: column;
              text-align: center;
              border-radius: .3rem;
              width: 1.4rem;
              height: .58rem;
              font-size: .26rem;
              color: #ffffff;
              background: -webkit-linear-gradient(left, #FFB379 , #FF6D65); /* Safari 5.1 - 6.0 */
              background: -o-linear-gradient(right, #FFB379, #FF6D65); /* Opera 11.1 - 12.0 */
              background: -moz-linear-gradient(right, #FFB379, #FF6D65); /* Firefox 3.6 - 15 */
              background: linear-gradient(to right, #FFB379 , #FF6D65); /* 标准的语法 */;
            }
            .isDone{
              width: 1.4rem;
              height: .58rem;
              display: flex;
              justify-content: center;
              flex-direction: column;
              text-align: center;
              font-size: .26rem;
              color: rgb(234, 127, 117);
            }
          }
        }

      }

    }
  }
}
</style>
<style lang="scss">
  .signIns{
    .modal-container{
      background-color: transparent !important;
      .isBodys{
        height: 6.5rem;
        position: relative;
        &>img:nth-of-type(1){
          width: 5.72rem;
          height: 5.76rem;
        }
        &>img:nth-of-type(2){
          width: .54rem;
          height: .54rem;
          position: absolute;
          top:0;
          right: 0;
        }
        &>span:nth-of-type(1){
          position: absolute;
          top: 3rem;
          left: 0;
          right: 0;
          font-size: .26rem;
          color: #ffffff;
          text-align: center;
          &>em{
            font-style: normal;
            color: #fa6034;
          }
        }
        &>span:nth-of-type(2){
          position: absolute;
          bottom: 1.25rem;
          left: 0;
          right: 0;
          font-size: .28rem;
          color: #666666;
          text-align: center;
          &>em{
            font-style: normal;
            color: #fc5659;
          }
        }
      }
    }
    .yd-slider-item img{
      height: 1.68rem;
    }
    .yd-slider-pagination-item-active{
      background-color: #394361;
    }
  }
</style>
