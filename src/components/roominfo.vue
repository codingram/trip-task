<template>
  <div>
    <b-container>
      <b-row class="mx-auto">
        <div><breadcum></breadcum></div>
        <div class="outline-whole-row3">
          Hurry! Last few rooms remaining for your dates
        </div>
      </b-row>

      <b-row class="p-0 m-0">
        <b-col md="5" class="p-0">
          <div class="p-0">
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
          </div>
        </b-col>
        <b-col md="4">
          <b-row class="img-row-p div-back-image-room  ml-0">
            <span class="font-room">ROOM IMAGES</span>
          </b-row>
          <b-row class="row-top-margin">
            <b-col>
              <b-row class="div-back-image ml-0"
                ><span class="font-rest">RESTAURANT</span></b-row
              >
            </b-col>
            <b-col>
              <b-row
                ><img
                  src="../assets/img1.jpg"
                  height="55px"
                  width="165px"
                  class="sec-th-margin"
                />
              </b-row>
              <b-row class="mt-2">
                <img
                  src="../assets/img1.jpg"
                  height="53px"
                  width="165px"
                  class="sec-th-margin"
                />
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="3" class="p-0">
          <div>
            <b-row class="outline-whole-row mx-auto pl-3 pr-3 pt-2 pb-2">
              <b-row class="whole-div-font-size ">
                <b-col md="6" class="pr-0">
                  <div class="text-left m-0 outline-inside-text">
                    <span class="bed-queen font-weight-bold"
                      >Standard room-queen Size bed</span
                    ><br />
                    <span class="none-refun"
                      ><font-awesome-icon :icon="['fas', 'check']" />
                      Non-Refundable</span
                    ><br />
                    <span class="room-only-font"
                      ><font-awesome-icon :icon="['fas', 'check']" /> Rooms
                      Only</span
                    ><br />
                  </div>
                </b-col>
                <b-col md="6" class="pl-0">
                  <div class="text-right">
                    <span class=" price-per-night-text price-per-night"
                      >Price Per Night for</span
                    ><br />
                    <span>2 Adults</span><br />
                    <span class="price-light-through text-secondary">₹3529</span
                    ><br />
                    <span class="price2 font-weight-bold"> ₹ 3,177</span><br />
                    <span class="save-price font-weight-bold"> Saving₹ 353</span
                    ><br />
                  </div>
                </b-col>
              </b-row>

              <b-row class="border-style">
                <b-col class="p-0">
                  <div class="text-left outline-inside-text m-0">
                    <span>OTHERS ROOMS</span>
                  </div>
                </b-col>
                <b-col class="p-0 ">
                  <div class="text-right m-0 outline-button booknow-button">
                    <button class="booknow-box-button button-maring-left">
                      BOOK THIS NOW
                    </button>
                  </div>
                </b-col>
              </b-row>
            </b-row>
          </div>
          <div>
            <b-row class="outline-whole-row2 mx-auto p-2 ">
              <b-row class="p-2">
                <div>
                  <b-row class="review-margin">
                    <div class="advisor-button-sm my-auto">
                      <font-awesome-icon :icon="['fab', 'tripadvisor']" />4.0
                    </div>
                    <span class="my-auto review-color pl-2">920 Reviews</span>
                  </b-row>
                </div>
              </b-row>

              <div>
                <div class="review-below font-weight-bold">
                  It is a business hotel, in a very nice area, metro station
                  just on the..
                </div>
                <b-row>
                  <b-col class="text-left north-star text-secondary"
                    >Northstar77098|B....</b-col
                  >
                  <b-col class="text-right more-review-font">More Review</b-col>
                </b-row>
              </div>
            </b-row>
          </div>
        </b-col>
        <b-col>
          <b-row>
            <b-row>
              <b-col>
                <div>
                  <b-row>
                    <b-col>
                      <b-row>
                        <b-col
                          ><div class="ibis-font font-weight-bold">
                            Ibis one Central Hotel
                          </div></b-col
                        >
                        <span class="star-padding">
                          <font-awesome-icon
                            :icon="['fas', 'star']"/><font-awesome-icon
                            :icon="['fas', 'star']"/><font-awesome-icon
                            :icon="['fas', 'star']"/>
                          <span class="star-color">
                            <font-awesome-icon :icon="['fas', 'star']" />
                            <font-awesome-icon :icon="['fas', 'star']" /> </span
                        ></span>
                      </b-row>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-row>
          <b-row>
            <b-col class="p-0">
              <div class="ibis-hotel-below font-weight-bold">
                Trade Center, Dubai, 9914, United Arab Emibrates
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
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
