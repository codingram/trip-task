import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "linkpage",
      component: () => import("./views/linkpage.vue")
    },
    {
      path: "/hotelList",
      name: "hotel_list",
      component: () => import("./views/hotellist.vue")
    },
    {
      path: "/hotelBooking",
      name: "hotel_booking",
      component: () => import("./views/hotelbooking.vue")
    }
  ]
});
