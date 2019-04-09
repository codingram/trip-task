<template>
  <div>
    <b-row class="border px-1 mx-0">
      <b-col md="10">
        <b-row>
          <b-col md="4">
            <div style="height:150px" class="">
              <!-- swiper1 -->
              <swiper
                :options="swiperOptionTop"
                class="gallery-top"
                ref="swiperTop"
              >
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper
                :options="swiperOptionThumbs"
                class="gallery-thumbs"
                ref="swiperThumbs"
              >
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
              </swiper>
            </div>
          </b-col>
          <b-col md="8"></b-col>
        </b-row>
        <div></div>
      </b-col>
      <b-col md="2"></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HotelCard",
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5
      },
      swiperOptionThumbs: {
        spaceBetween: 2,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 0,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";

.swiper-slide {
  background-size: cover;
  background-position: center;
  &.slide-1 {
    background-image: url("../../assets/imagesR/backimage.jpg");
  }
  &.slide-2 {
    background-image: url("../../assets/imagesR/backimage.jpg");
  }
  &.slide-3 {
    background-image: url("../../assets/imagesR/backimage.jpg");
  }
  &.slide-4 {
    background-image: url("../../assets/imagesR/backimage.jpg");
  }
  &.slide-5 {
    background-image: url("../../assets/imagesR/backimage.jpg");
  }
}
.gallery-top {
  height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 25% !important;
  box-sizing: border-box;
  padding: 5px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.8;
}
</style>
