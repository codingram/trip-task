import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Vue scroll import
var VueScrollTo = require('vue-scrollto'); 
Vue.use(VueScrollTo)

// bootstrap import
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelopeOpenText,
  faUser,
  faParachuteBox,
  faEnvelope,
  faPlane,
  faHotel,
  faTrain,
  faBus,
  faTaxi,
  faPassport,
  faHome,
  faGift,
  faEllipsisH,
  faDotCircle,
  faBookmark,
  faMapMarkerAlt,
  faStar,
  faGlobeEurope,
  faCaretDown,
  faWifi,
  faUtensils,
  faParking,
  faSuitcaseRolling,
  faCheck,
  faThumbsUp,
  faTimesCircle,
  faShower,
  faToriiGate,
  faTicketAlt
} from "@fortawesome/free-solid-svg-icons"; //fas fa
import {
  faFacebookF,
  faTwitter,
  faTripadvisor,
  faCentos,
  faCreativeCommonsNc
} from "@fortawesome/free-brands-svg-icons"; //fab
import { faCircle, faCalendarAlt } from "@fortawesome/free-regular-svg-icons"; //far

library.add(
  faEnvelopeOpenText,
  faUser,
  faParachuteBox,
  faPlane,
  faHotel,
  faTrain,
  faBus,
  faTaxi,
  faPassport,
  faHome,
  faGift,
  faEllipsisH,
  faDotCircle,
  faBookmark,
  faMapMarkerAlt,
  faStar,
  faGlobeEurope,
  faCaretDown,
  faWifi,
  faUtensils,
  faParking,
  faSuitcaseRolling,
  faCheck,
  faThumbsUp,
  faTimesCircle,
  faShower,
  faToriiGate,
  faTicketAlt
); //fas
library.add(faEnvelope, faCircle, faCalendarAlt); //far
library.add(faFacebookF, faTwitter, faTripadvisor, faCentos, faCreativeCommonsNc); //fab

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
