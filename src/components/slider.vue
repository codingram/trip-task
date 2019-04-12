<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <!-- swiper -->
        <div class="pt-3 pb-5">
          <swiper
            :options="swiperOption"
            v-for="text in texts"
            v-bind:key="text.index"
          >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >
            <swiper-slide
              ><b-row
                ><b-col md="2" class="p-0 swiper-icon"
                  ><font-awesome-icon :icon="['fas', 'thumbs-up']"/></b-col
                ><b-col md="10" class="p-0 swiper-font">{{
                  text.para
                }}</b-col></b-row
              ></swiper-slide
            >

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      texts: [
        {
          para:
            "Start Your day with Indian breakfast and enjoy dishes made by the hotels Indian Chief's"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.swiper-margin {
  margin-left: 85px;
}
.swiper-font {
  font-size: 13px;
  padding: 18px;
}
.swiper-icon {
  margin-right: -21px;
  margin-top: 10px;
  font-size: 21px;
}
</style>
