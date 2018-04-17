<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "Microsoft YaHei",Helvetica,"PingFang SC","Hiragino Sans GB","Helvetica Neue",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    height: 100%;
  }
  input,button{
    font-family: "Microsoft YaHei",Helvetica,"PingFang SC","Hiragino Sans GB","Helvetica Neue",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* 页头全局样式 */
  .isHeader{
    display: flex;
    justify-content: center;
    height: .8rem;
    font-size: .36rem;
    color: #333333;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    border-bottom: .01rem solid #D8D8D8;
  }
  .isHeader>span{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .lefts{
    position: absolute;
    left: .3rem;
    top: .15rem;
  }
  .lefts i{
    font-size: .36rem;
  }
  /* 模态框样式 */
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 5.6rem;
    margin: 0px auto;
    background-color: #fff;
    border-radius: .2rem;
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    min-height: 1rem;
  }

  .modal-header {
    /*height: 0.9rem;*/
    font-size: 0.26rem;
    background-color: #f6f6f6;
    color: #333;
    /*line-height: 0.9rem;*/
    border-top-left-radius: .2rem;
    border-top-right-radius: .2rem;
  }

  .modal-body {
    /*height: 2.4rem;*/
    /*border-bottom: 0.01rem solid #e8e8e8;*/
    font-size: 0.26rem;
  }
  .modal-footer{
    /*height: 1rem;*/
  }
  .modal-footer div{
    display: flex;
    justify-content: flex-start;
  }
  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
