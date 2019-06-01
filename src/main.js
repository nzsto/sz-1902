import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from "vue-touch";
import BScroll from "@common/BScroll/BScroll"
import Loading from "@common/loading/Loading"
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
Vue.filter("toImg",(url,params)=>{
 if(!url)return;
  return url.replace(/w\.h/,params)
})
Vue.component("BScroll",BScroll);
Vue.component("Loading",Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
