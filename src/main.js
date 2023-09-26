import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';
import i18n from './locales/i18n';
import './assets/main.css';
import { Message } from 'element-ui';
Vue.use(Message);
Vue.prototype.$message = Message;
new Vue({
  store,
  i18n,
  router,
  render: (h) => h(App)
}).$mount('#app');
