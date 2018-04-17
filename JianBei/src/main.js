// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import {Input} from 'vue-ydui/dist/lib.rem/input';
import {SendCode} from 'vue-ydui/dist/lib.rem/sendcode';
import {CheckBox, CheckBoxGroup} from 'vue-ydui/dist/lib.rem/checkbox';
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider';
import {Switch} from 'vue-ydui/dist/lib.rem/switch';
import '../static/frontIcon/iconfont.css'

Vue.config.productionTip = false
Vue.use(YDUI);
/* 按需引入YDUI */
Vue.component(Input.name, Input);
Vue.component(SendCode.name, SendCode);
Vue.component(CheckBox.name, CheckBox);
Vue.component(CheckBoxGroup.name, CheckBoxGroup);
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);
Vue.component(Switch.name, Switch);



//模态框组件
let myComponent = Vue.extend({
  template:'  <transition name="modal">\n' +
  '    <div class="modal-mask">\n' +
  '      <div class="modal-wrapper">\n' +
  '        <div class="modal-container">\n' +
  '\n' +
  '          <div class="modal-header">\n' +
  '            <slot name="header">\n' +
  '            </slot>\n' +
  '          </div>\n' +
  '\n' +
  '          <div class="modal-body">\n' +
  '            <slot name="body">\n' +
  '            </slot>\n' +
  '          </div>\n' +
  '\n' +
  '          <div class="modal-footer">\n' +
  '            <slot name="footer">\n' +
  '            </slot>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>\n' +
  '    </div>\n' +
  '  </transition>'
});
Vue.component('modal',myComponent);

//页头
let meComponent = Vue.extend({
  template:`
  <header class="isHeader">
        <span class="lefts"><slot name="left"></slot></span>
        <span class="centers"><slot name="titles"></slot></span>
        <span class="rights"><slot name="right"></slot></span>
  </header>
  `
})
Vue.component('headers',meComponent);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
