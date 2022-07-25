import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import "@/assets/styles/iconfont/iconfont.css";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import { LazyLoading } from "@/assets/js/wxy.js"
import store from "./store";
Vue.prototype.$LazyLoading = new LazyLoading();
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
// console.log(store)
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

