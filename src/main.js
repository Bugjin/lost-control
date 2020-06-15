import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont/iconfont.css'

// import VueRouter from 'vue-router';
// import App from 'components/app.vue';
// import Routers from './router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// Vue.use(VueRouter);
Vue.use(ViewUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
