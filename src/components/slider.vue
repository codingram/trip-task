<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <!-- swiper -->
        <div class="mb-5 mt-4">
          <swiper
            :options="swiperOption"
            v-for="text in texts"
            v-bind:key="text.index"
            class="col-md-11"
          >
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                </div>
                <div class="swiper-font text-justify">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>

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
  color: #808080eb;
  line-height: 15px;
}
.swiper-icon {
  margin-right: -21px;
  font-size: 17px;
  color: #675f5f;
}
.swiper-container {
  position: inherit;
}
.swiper-button-prev,
.swiper-button-next {
  background-size: 13px 40px;
  margin-top: -37px;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  // background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3Dhttp%3A%2F%2Fwww.w3.org%…19.9L22%2C44L0%2C22L0%2C22L0%2C22z%20fill%3D%23007aff%2F%3E%3C%2Fsvg%3E);
  left: 10px;
  right: auto;
}
</style>
