import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/svg';
import SvgIcon from '@/components/SvgIcon.vue';
import Vant from 'vant'
import { Locale } from 'vant';
import deDE from 'vant/es/locale/lang/de-DE';
import 'vant/lib/index.less';
Locale.use('de-DE', deDE);
Vue.component('SvgIcon', SvgIcon);
Vue.use(Vant);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
