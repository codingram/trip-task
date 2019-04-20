<template>
  <div>
    <b-container>
      <div class="mt-3">
        <breadcum></breadcum>
      </div>
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
          <div class="mb-2 div-back-image-room">
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
          <div class="roominfo-col-3 ">
            <span>Hurry! Last few rooms remaining for your dates</span>
          </div>
          <div class="outline-whole-row">
            <div>
              <div class="float-left standard-room-div-width">
                <div
                  class="col3-room-queen-font all-blue-color font-weight-bold"
                >
                  Standard room-Queen size bed
                </div>
                <div class="all-redtext-color font-weight-bold">
                  <span class="col3-tick-icon mr-1">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </span>
                  Non-Refundable
                </div>
                <div class="all-green-color font-weight-bold">
                  <span class="col3-tick-icon mr-1">
                    <font-awesome-icon :icon="['fas', 'check']" />
                  </span>
                  Rooms Only
                </div>
              </div>

              <div class="float-right text-right">
                <div class="col3-price-per-night-text">
                  Price Per Night for
                </div>
                <div class="col3-2adults">2 Adults</div>
                <div class="col3-price-line-through mt-3">
                  ₹3529
                </div>
                <div class="col3-price-details all-blue-color font-weight-bold">
                  ₹ 3,177
                </div>
                <div class="col3-saveing-price font-weight-bold mb-2">
                  Saving ₹ 353
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="col3-pricedetails-below-border"></div>
            <div class="mt-2 d-flex">
              <div class=" all-blue-color col3-others-room-text">
                OTHER ROOMS
              </div>
              <div class=" ml-auto">
                <button class="booknow-box-button">
                  BOOK THIS NOW
                </button>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="roominfo-col3-review mt-2">
            <div class="d-flex">
              <div class="col3-advisor-button-sm d-flex justify-content-center">
                <span class="my-auto mr-1">
                  <font-awesome-icon :icon="['fab', 'tripadvisor']" />
                </span>
                <span class="font-weight-bold my-auto"> 4.0</span>
              </div>
              <div class="my-auto">
                <span class="my-auto review-color ml-2">920 Reviews</span>
              </div>
            </div>

            <div class="review-below font-weight-bold mt-2">
              It is a business hotel, in a very nice area, metro station just on
              the
            </div>
            <div class="col3-northstar-text">
              <div class="float-left northstar-text-overflow">
                Northstar77098|B
              </div>
              <div class="float-right more-review-font font-weight-bold">
                MORE REVIEWS
              </div>
            </div>
          </div>
        </b-col>
      </div>

      <div class="mt-2">
        <div class="ibis-hotel-head font-weight-bold">
          Ibis one Central Hotel
        </div>
        <div class="hotel-star-size  ml-2">
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <font-awesome-icon :icon="['fas', 'star']" />
          <span class="star-color">
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
          </span>
        </div>
      </div>
      <div class="ibis-hotel-subhead font-weight-bold">
        Trade Centre, Dubai, 9914, United Arab Emibrates
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
