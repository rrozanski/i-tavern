import BModal from 'bootstrap-vue';
import BProgress from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(BModal);
Vue.use(BProgress);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
