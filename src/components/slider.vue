<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <!-- swiper -->
        <div class="mb-4 mt-4">
          <swiper
            :options="swiperOption"
            v-for="text in texts"
            v-bind:key="text.index"
            class="col-md-11"
          >
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
                  {{ text.para }}
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="d-flex">
                <div class="swiper-icon mr-2">
                  <font-awesome-icon :icon="['far', 'thumbs-up']" />
                </div>
                <div class="swiper-font">
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
@import "../assets/scss/Sstyle/slider.scss";
</style>
