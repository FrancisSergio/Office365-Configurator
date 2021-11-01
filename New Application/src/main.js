import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n';
import messages from './lang';
import Routes from "./routes";


Vue.use(VueI18n);
Vue.use(VueRouter);

const router = new VueRouter({
  // mode:'history',
  routes: Routes
});

export const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages
});

new Vue({
  // el: '#App',
  i18n,
  render: h => h(App),
  router:router
}).$mount('#App');





