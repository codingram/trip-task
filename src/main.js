import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap import
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-solid-svg-icons"; //fas fa
import {} from "@fortawesome/free-brands-svg-icons"; //fab
import {} from "@fortawesome/free-regular-svg-icons"; //far

library.add(); //fas
library.add(); //far
library.add(); //fab
Vue.component("font-awesome-icon", FontAwesomeIcon);

// vue-swiper import
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
