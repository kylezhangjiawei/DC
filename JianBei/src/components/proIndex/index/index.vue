<template>
    <div class="index">
      <header>
        <div>
          <img :src="QRcodeIcon" alt="">
          <input id="search" type="search" >
          <i></i>
          <img :src="msgIcon" alt="">
        </div>
      </header>
      <div class="container">
        <!-- 公告 -->
        <p>
          <img :src="noticeIcon" alt="">
          <span>公告：</span>
          <span>公告最新系统消息...</span>
        </p>
        <!-- navbar -->
        <div>
          <dl v-for="(item,index) in navBar" @click="goSomeWhere(item)">
            <dt>
              <img :src="item.icon" alt="">
            </dt>
            <dd>{{item.name}}</dd>
          </dl>
        </div>
        <!-- 商城推荐 -->
        <div>
          <p :style="{background:marketBackImg}">
            商城推荐
          </p>
          <div>
            <div :style="{background:recommend.img1}">
              <p>
                <img :src="timeIcon" alt="计时">
                <span>限时抢购</span>
              </p>
              <!-- 计时器 -->
              <div>
                <span>{{hour < 10 ? '0':''}}{{hour}}</span>
                <span>:</span>
                <span>{{minute < 10 ? '0':''}}{{minute}}</span>
                <span>:</span>
                <span>{{second < 10 ? '0':''}}{{second}}</span>
              </div>
              <!-- 折扣 -->
              <div>
                <img :src="discountImg" alt="折扣">
              </div>
              <!--文字介绍 -->
              <div>
                <span>温斯顿系列石英表 41MM表盘KOM-W2880</span>
              </div>
            </div>
            <div>
              <div :style="{background:recommend.img2}">
                <!-- 特惠 -->
                <span :style="{background:tHImg}">
                  <em>特惠</em>
                </span>
                <!-- 文字介绍 -->
                <span>Audio Technica 编写HIFI耳机</span>
              </div>
              <div :style="{background:recommend.img3}">
                <!-- 特惠 -->
                <span :style="{background:tHImg}">
                  <em>特惠</em>
                </span>
                <!-- 文字介绍 -->
                <span>5DMinor蓝牙音箱-定制套装</span>
              </div>
            </div>
          </div>
          <div>
            <img :src="streamerImg" alt="横幅图片">
          </div>
        </div>
        <!-- 热销单品 -->
        <div>
          <p :style="{background:hotProductImg}">
            热销单品
          </p>
          <div v-for="(item,index) in hotImg" :style="{background:item.img}">
            <!-- hot图标 -->
            <img :src="hotIcon" alt="hot">
            <!-- 文字介绍 -->
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
          return{
            QRcodeIcon:require('../../../../static/img/sy_icon_2wm@2x.png'), //扫描二维码
            msgIcon:require('../../../../static/img/sy_icon_xx@2x.png'), //消息图标
            noticeIcon:require('../../../../static/img/sy_icon_gg@2x.png'), //小喇叭
            navBar:[
              {
                name:'签到',
                icon:require('../../../../static/img/sy_icon_qd@2x.png'),
                path:'/signIn'
              },
              {
                name:'卡券包',
                icon:require('../../../../static/img/sy_icon-yhj@2x.png'),
                path:'/signIn'
              },
              {
                name:'刮刮卡',
                icon:require('../../../../static/img/sy_icon_ggk@2x.png'),
                path:'/signIn'
              },
              {
                name:'大转盘',
                icon:require('../../../../static/img/sy_icon_zp@2x.png'),
                path:'/signIn'
              },
              {
                name:'邀请',
                icon:require('../../../../static/img/sy_icon_yq@2x.png'),
                path:'/signIn'
              }
            ], //导航图片
            marketBackImg:'url(' + require('../../../../static/img/2@2x.png') + ')50% 50% no-repeat', //商城推荐背景图片
            timeIcon:require('../../../../static/img/sy_icon_qg@2x.png'),//计时器图标
            discountImg:require('../../../../static/img/sy_icon_5@2x.png'),//折扣图标
            tHImg:'url(' + require('../../../../static/img/tehui.png') + ')50% 50% /contain no-repeat',//特惠右上角图标
            recommend:{
              img1:'url(' + require('../../../../static/img/sy_img01.jpg') + ')50% 50% /contain no-repeat',
              img2:'url(' + require('../../../../static/img/sy_img02.jpg') + ')50% 50% /cover no-repeat',
              img3:'url(' + require('../../../../static/img/sy_img03.jpg') + ')50% 50% /cover no-repeat',
            }, // 商城推荐内容图片
            streamerImg:require('../../../../static/img/sy_img08.jpg'),//横幅图片
            hotProductImg:'url(' + require('../../../../static/img/sy_rxdp@2x.png') + ')50% 50% /contain no-repeat',
            hotIcon:require('../../../../static/img/sy_icon_hot@2x.png'),//Hot图标
            hotImg:[
              {
                img:'url(' + require('../../../../static/img/sy_img04.jpg') + ')50% 50% /contain no-repeat',
                text:'DAISYSKY保加利亚大马士革奥图玫瑰纯露'
              },
              {
                img:'url(' + require('../../../../static/img/sy_img05.jpg') + ')50% 50% /contain no-repeat',
                text:'three box 时尚休闲男士公文单肩手提斜挎包'
              },
              {
                img:'url(' + require('../../../../static/img/sy_img06.jpg') + ')50% 50% /contain no-repeat',
                text:'NIGHT 北欧西施餐具组合系列'
              },
              {
                img:'url(' + require('../../../../static/img/sy_img07.jpg') + ')50% 50% /contain no-repeat',
                text:'保湿精华水化妆水爽肤水蜗牛润肌精露105ml'
              },
            ],//热销单品图片
            hour:0,//时
            minute:1,//分
            second:60,//秒
          }
        },
      mounted(){
        //this.timer();
      },
      methods:{
          timer(){
            let clock = setInterval(() => {
              if(this.hour === 0 && this.minute === 0 && this.second === 0){
                clearInterval(clock);
              }else if((this.second--) <= 0){
                if(this.minute !== 0){
                  this.minute--;
                  this.second = 59;
                }else if(this.minute <=0 && this.hour !== 0){
                  this.hour--;
                  this.minute = 59;
                  this.second = 59;
                }
              }
            }, 1000)
          },
        /* nav页面跳转 */
        goSomeWhere(data){
          this.$router.push({path:data.path});
        }
      }
    }
</script>

<style scoped lang="scss">
.index{
  height: 100%;
  overflow: auto;
  padding-bottom: 1.2rem;
  background-color: #F7F7F7;
  header{
    height: 4.2rem;
    background: url("../../../../static/img/sy_banner1.jpg")50% 50% no-repeat;
    background-size: contain;
    &>div{
      display: flex;
      align-items: center;
      height: .88rem;
      padding-top: .4rem;
      position: relative;
      &>img:nth-of-type(1){
        width: .44rem;
        height: .44rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: .36rem;
      }
      &>img:nth-of-type(2){
        width: .50rem;
        height: .48rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: .6rem;
      }
      &>input{
        width: 4.7rem;
        height: .8rem;
        border-radius: .5rem;
        border: none;
        display: flex;
        justify-content: center;
        flex-direction: column;
        opacity: .9;
        margin-left: .6rem;
        padding-left: .6rem;
        box-sizing: border-box;
        outline: none;
        background-color: #ffffff;
      }
      &>i{
        background: url("../../../../static/img/sy_icon_search@2x.png")50% 50% no-repeat;
        background-size: contain;
        width: .3rem;
        height: .3rem;
        position: absolute;
        left: 1.58rem;
      }
    }
  }
  .container{
    &>p{
      padding: 0 .2rem;
      height: .8rem;
      display: flex;
      align-items: center;
      margin-bottom: .1rem;
      background-color: #ffffff;
      &>img{
        width: .34rem;
        height: .34rem;
        margin-right: .18rem;
      }
      &>span:nth-of-type(1){
        font-size: .3rem;
        color: #666666;
        font-weight: bold;
      }
      &>span:nth-of-type(2){
        font-size: .28rem;
        color: #666666;
        overflow: hidden;
        white-space: nowrap;
       text-overflow: ellipsis;
      }
    }
    &>div:nth-of-type(1){
      display: flex;
      align-items: center;
      height: 1.74rem;
      font-size: .22rem;
      padding: 0 .2rem;
      background-color: #ffffff;
      &>dl{
        margin-right: .75rem;
        &>dt{
          &>img{
            width: .82rem;
            height: .82rem;
          }
        }
        &>dd{
          margin-top: .12rem;
            text-align: center;
        }
      }
      &>dl:last-child{
        margin-right: 0;
      }
    }
    &>div:nth-of-type(2){
      padding: 0 .2rem;
      &>p{
        height: .88rem;
        line-height: .88rem;
        font-size: .3rem;
        color: #f04a4a;
        text-align: center;
      }
      &>div:nth-of-type(1){
        display: flex;
        flex-wrap: wrap;
        &>div:nth-of-type(1){
          background-color: #ffffff;
          border-radius: .02rem;
          width: 3.5rem;
          height: 4rem;
          position: relative;
          overflow: hidden;
          &>p{
            display: flex;
            align-items: center;
            font-size: .26rem;
            color: #f04a4a;
            position: absolute;
            top: .15rem;
            left: .15rem;
            &>span{
              margin-left: .05rem;
            }
          }
          &>div:nth-of-type(1){
            font-size: .2rem;
            position: absolute;
            top: 1.86rem;
            left: .15rem;
            &>span:nth-of-type(2n+1){
              display: inline-block;
              width: .3rem;
              height: .3rem;
              line-height: .3rem;
              background-color: #666666;
              border-radius: .06rem;
              color: #ffffff;
              text-align: center;
            }
          }
          &>div:nth-of-type(2){
            position: absolute;
            top: .2rem;
            right: .3rem;
            &>img{
              width: .68rem;
              height: .68rem;
            }
          }
          &>div:nth-of-type(3){
            font-size: .24rem;
            color: #666666;
            position: absolute;
            bottom: 0rem;
            left: 0;
            right: 0;
            padding: .1rem;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        &>div:nth-of-type(2){
          margin-left: .1rem;
          width: 3.5rem;
          height: 4rem;
          overflow: hidden;
          &>div{
            height: 1.95rem;
            font-size: .24rem;
            color: #666666;
            box-sizing: border-box;
            position: relative;
            &>span:nth-of-type(1){
              display: inline-block;
              position: absolute;
              top: 0;
              right: 0;
              width: .8rem;
              height: .8rem;
              &>em{
                font-style: normal;
                font-size: .24rem;
                color: #ffffff;
                position: absolute;
                top: .03rem;
                right: .03rem;
              }
            }
            &>span:nth-of-type(2){
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: .1rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          &>div:nth-of-type(1){
            margin-bottom: .1rem;
          }
        }
      }
      &>div:nth-of-type(2){
        margin-top: .1rem;
        &>img{
          width: 100%;
          height: 100%;
          border-radius: .06rem;
        }
      }
    }
    &>div:nth-of-type(3){
      position: relative;
      min-height: 1rem;
      padding: 0 .2rem;
      padding-top: .3rem;
      display: flex;
      flex-wrap: wrap;
      &>p{
        position: absolute;
        top: 0;
        left: 0;
        font-size: .24rem;
        width: 1.76rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        color: #ffffff;
        z-index: 1;
      }
      &>div{
        position: relative;
        width: 3.5rem;
        height: 3.8rem;
        margin-bottom: .1rem;
        &>img{
          width: .36rem;
          height: .4rem;
          position: absolute;
          top: .14rem;
          right: .16rem;
        }
        &>span{
          overflow : hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: .1rem;
          font-size: .24rem;
          color: #666666;
        }
      }
      &>div:nth-of-type(2n+1){
        margin-right: .1rem;
      }
    }
  }
}
</style>
