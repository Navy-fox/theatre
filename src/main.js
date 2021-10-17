import Vue from "vue";
import "./assets/scss/global.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
