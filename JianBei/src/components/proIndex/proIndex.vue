<template>
    <div class="proIndex">
      <router-view></router-view>
      <nav>
        <router-link v-for="(item,index) in footBar" :key="item.id" :to="{name : item.link}" @click="choice(index)">
          <div class="navItem">
            <img :src="imagePath(item.icon,index)" :alt="item.name" :class="{'imgThree':Number(item.id) === 3}">
            <p>{{item.name}}</p>
          </div>
        </router-link>
      </nav>
    </div>
</template>

<script>
    export default {
      name: "pro-index",
      data(){
        return{
          footBar: [
            {
              name: '首页',
              icon: 'money',
              link: 'index',
              id:'1'
            },
            {
              name: '学贝',
              icon: 'book',
              link: 'studyBei',
              id:'2'
            },
            {
              name: '买贝',
              icon: 'beike',
              link: 'buyBei',
              id:'3'
            },
            {
              name: '约贝',
              icon: 'yuebei',
              link: 'dateBei',
              id:'4'
            },
            {
              name: '我贝',
              icon: 'people',
              link: 'myBei',
              id:'5'
            }
          ],
          indexs:-1,//路由定位
        }
      },
      beforeRouteUpdate (to, from, next) {
        this.indexs = this.footBar.findIndex(item => to.name === item.link)
        next()
      },
      created() {
        this.indexs = this.footBar.findIndex(item => this.$route.name === item.link)
//      console.log(this.$route.fullPath)
      },
      methods:{
        imagePath(icon,index){
          return require(`../../../static/img/${icon}${this.indexs ===index  ? '1' :''}.png`)
        },
        choice(index){
          this.indexs = index;
        }
      }
    }
</script>

<style scoped lang="scss">
.proIndex{
  height: 100%;
  nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1.2rem;
    background: url("../../../static/img/bottomNav.png")50% 50% no-repeat;
    font-size: .2rem;
    background-size: contain;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    z-index: 100;
    &>a{
      text-decoration: none;
    }
    .navItem{
      &>img{
        width: .46rem;
        height: .4rem;
      }
      &>p{
        margin: .05rem 0;
        color: #666666;
        text-align: center;
      }
    }
  }
  .imgThree{
    width: .6rem !important;
    height: .68rem !important;
  }
}
</style>
