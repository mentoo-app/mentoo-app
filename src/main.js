import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/svg';
import SvgIcon from '@/components/SvgIcon.vue';
import Vant from 'vant'
import { Locale } from 'vant';
import deDE from 'vant/es/locale/lang/de-DE';
import 'vant/lib/index.less';
import PageData from './data.json'
window.PageData=PageData;
var pageInPortraintMode;

// Listen for window resizes to detect orientation changes
window.addEventListener("resize", windowSizeChanged);

// Set the global orientation variable as soon as the page loads
addEventListener("load", function() {
  pageInPortraintMode = window.innerHeight > window.innerWidth;
  document.getElementById("viewport").setAttribute("content", "width=" + window.innerWidth + ", height=" + window.innerHeight + ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
})

// Adjust viewport values only if orientation has changed (not on every window resize)
function windowSizeChanged() {
  if (((pageInPortraintMode === true) && (window.innerHeight < window.innerWidth)) || ((pageInPortraintMode === false) && (window.innerHeight > window.innerWidth))) {
    pageInPortraintMode = window.innerHeight > window.innerWidth;
    document.getElementById("viewport").setAttribute("content", "width=" + window.innerWidth + ", height=" + window.innerHeight + ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
  }
}
Locale.use('de-DE', deDE);
Vue.component('SvgIcon', SvgIcon);
Vue.use(Vant);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
