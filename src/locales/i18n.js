import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import messages from './getLangs';
export default new VueI18n({
  legacy: false,
  locale: window.localStorage.getItem('lang') || 'zh_CN',
  messages,
  globalInjection: true, // 全局生效$t
  silentTranslationWarn: true
});
