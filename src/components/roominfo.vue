<template>
  <div>
    <b-row>
      <b-col md="4">
        <md-card>
          <md-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide class="slide-1"></swiper-slide>
              <swiper-slide class="slide-2"></swiper-slide>
              <swiper-slide class="slide-3"></swiper-slide>
              <swiper-slide class="slide-4"></swiper-slide>
              <swiper-slide class="slide-5"></swiper-slide>
              <div
                class="swiper-pagination swiper-pagination-white"
                slot="pagination"
              ></div>
              <div
                class="swiper-button-prev swiper-button-white"
                slot="button-prev"
              ></div>
              <div
                class="swiper-button-next swiper-button-white"
                slot="button-next"
              ></div>
            </swiper>
          </md-card-media>
        </md-card>
      </b-col>
      <b-col md="3"></b-col>
      <b-col md="3"></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
