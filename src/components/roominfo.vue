<template>
  <div>
    <b-container>
      <div class="mt-3">
        <div class="float-left"><breadcum></breadcum></div>

        <div class="outline-whole-row3 float-right mt-1">
          Hurry! Last few rooms remaining for your dates
        </div>
      </div>
      <div class="clearfix"></div>
      <div>
        <div class="roominfo-fulldiv-display">
          <b-col md="5" class="p-0">
            <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <swiper-slide class="swiper-style"></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </b-col>
          <b-col md="4">
            <div class="img-row-p mb-2 div-back-image-room">
              <span class="font-room">ROOM IMAGES</span>
            </div>
            <div class="roominfo-fulldiv-display">
              <div class="div-back-image-restaurant mr-2">
                <span class="font-rest">RESTAURANT</span>
              </div>
              <div>
                <div class="div-back-image-map"></div>
                <div class="div-back-image-map mt-2"></div>
              </div>
            </div>
          </b-col>
          <b-col md="3" class="p-0">
            <div class="outline-whole-row p-2">
              <div>
                <div class="float-left">
                  <div class="bed-queen font-weight-bold">
                    Standard room-queen Size bed
                  </div>
                  <div class="none-refun">
                    <font-awesome-icon :icon="['fas', 'check']" />
                    Non-Refundable
                  </div>
                  <div class="room-only-font">
                    <font-awesome-icon :icon="['fas', 'check']" />
                    Rooms Only
                  </div>
                </div>

                <div class="float-right">
                  <div class=" price-per-night-text price-per-night">
                    Price Per Night for
                  </div>
                  <div>2 Adults</div>
                  <div class="price-light-through text-secondary">
                    ₹3529
                  </div>
                  <div class="price2 font-weight-bold">
                    ₹ 3,177
                  </div>
                  <div class="save-price font-weight-bold">
                    Saving₹ 353
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="border-style"></div>
              <div class=" pt-2">
                <div class="float-left outline-inside-text">OTHER ROOMS</div>
                <div class="float-right">
                  <button class="booknow-box-button button-maring-left">
                    BOOK THIS NOW
                  </button>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="outline-whole-row-review p-2 mt-2">
              <div class="review-display-flex">
                <div class="advisor-button-sm my-auto">
                  <font-awesome-icon :icon="['fab', 'tripadvisor']" />
                  <span>4.0</span>
                </div>
                <div>
                  <span class="my-auto review-color pl-2">920 Reviews</span>
                </div>
              </div>
              <div class="review-below font-weight-bold pt-2">
                It is a business hotel, in a very nice area, metro station just
                on the...
              </div>
              <div class="north-star">
                <div class="float-left">Northstar77098|B...</div>
                <div class="float-right more-review-font">More Review</div>
              </div>
            </div>
          </b-col>
        </div>
      </div>
      <div>
        <div class="ibis-font font-weight-bold">
          <div>Ibis one Central Hotel</div>
          <div class="star-padding my-auto ml-2">
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <span class="star-color">
              <font-awesome-icon :icon="['fas', 'star']" />
              <font-awesome-icon :icon="['fas', 'star']" />
            </span>
          </div>
        </div>
        <div class="ibis-hotel-below font-weight-bold">
          Trade Center, Dubai, 9914, United Arab Emibrates
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import breadcum from "@/components/breadcum.vue";
export default {
  components: {
    breadcum
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
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
<style lang="scss">
@import "../assets/scss/Sstyle/roominfo.scss";
</style>
