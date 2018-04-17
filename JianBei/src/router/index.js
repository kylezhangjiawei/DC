import Vue from 'vue'
import Router from 'vue-router'
import sign from '../components/sign' //登陆
import proIndex from '../components/proIndex/proIndex' //底部导航栏
import index from '../components/proIndex/index/index' //首页
import studyBei from '../components/proIndex/studyBei/studyBei' //学贝
import buyBei from '../components/proIndex/buyBei/buyBei' //买贝
import dateBei from '../components/proIndex/dateBei/dateBei' //约贝
import myBei from '../components/proIndex/myBei/myBei'//我贝
import retrievePassword from '../components/retrievePassword'//找回密码
import signUp from '../components/signUp' //注册
import signIn from '../components/proIndex/index/signIn/signIn'//签到
import seting from '../components/proIndex/myBei/seting/seting'//个人设置
import message from  '../components/proIndex/myBei/message/message' //个人中心

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: sign
    },
    {
      path: '/retrievePassword',
      name: 'retrievePassword',
      component: retrievePassword
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path:'/proIndex',
      component:proIndex,
      children:[
        {path: '', name: 'index', component: index},
        {path: '/studyBei', name: 'studyBei', component: studyBei},
        {path: '/buyBei', name: 'buyBei', component: buyBei},
        {path: '/dateBei', name: 'dateBei', component: dateBei},
        {path: '/myBei', name: 'myBei', component: myBei},
      ]
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/seting',
      name: 'seting',
      component: seting
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
  ]
})
export default router
