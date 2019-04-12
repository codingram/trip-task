<template>
  <div>
    <b-container>
      <div>
        <b-row class="mx-auto my-auto">
          <b-col md="6"> <breadcum></breadcum></b-col>

          <b-col md="3">
            <div class="outline-whole-row3">
              Hurry! Last few rooms remaining for your dates
            </div>
          </b-col>
        </b-row>
      </div>
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
            <b-row class="outline-whole-row mx-auto p-2">
              <b-row class="whole-div-font-size ">
                <b-col md="6">
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
                <b-col md="6">
                  <div class="text-right">
                    <span class="text-secondary price-per-night"
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
                        <span class="north-star my-auto">
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
@import "../assets/scss/_svariables.scss";
.star-color {
  color: #8080805c;
}
.swiper-style {
  height: 270px;
  background-image: url(../assets/ImagesS/roomimage.jpeg);
  border-radius: 6px 0px 0px 6px;
}
.outline-whole-row {
  border: 1px solid #8080807a;
  font-size: 12px;
  border-radius: 6px;
  box-shadow: 0.01px 0.01px 0.01px 0.01px grey;
}
.outline-inside-text {
  font-size: 10px;
  color: $alltextbluecolor;
  font-weight: bold;
}
.outline-button {
  margin-left: 25px;
}
.img-row-p {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 16px;
}
.outline-whole-row2 {
  border: 1px solid #8080807a;
  font-size: 12px;
  margin-top: 10px;
  height: 112px;
  border-radius: 6px;
}
.outline-whole-row3 {
  border: 1px solid #8080807a;
  font-size: 11px;
  padding: 3px;
  width: 274px;
  margin-top: 31px;
  margin-left: 264px;
  height: 28px;
  text-align: center;
  border-radius: 3px;
  color: red;
  background-color: #ff00002e;
}
.booknow-box-button {
  background: $allgradientbluecolor;
  border-radius: 20px;
  width: 109px;
  height: 29px;
  border: none;
  font-weight: bold;
  font-size: 10px;
  color: $textwhitecolor;
}
.swiper-button-prev,
.swiper-button-next {
  background-size: 16px 44px;
}
.div-back-image {
  background: linear-gradient(rgba(13, 14, 14, 0.12), rgba(19, 21, 21, 0.83)),
    url("../assets/ImagesS/rest.jpeg");

  height: 118px;
  width: 164px;
}
.font-rest {
  color: white;
  font-size: 10px;
  margin-top: 87px;
  margin-left: 11px;
  font-weight: bold;
}
.div-back-image-room {
  background: linear-gradient(rgba(13, 14, 14, 0.12), rgba(19, 21, 21, 0.83)),
    url("../assets/ImagesS/room.jpeg");

  height: 144px;
  width: 340px;
}
.font-room {
  color: white;
  font-size: 10px;
  margin-top: 108px;
  font-weight: bold;
}
.row-top-margin {
  margin-top: -8px;
}
.border-style {
  border-top: 1px solid #80808057;
  margin-left: 0px;
  margin-right: 1px;
  margin-top: 7px;
  padding-top: 10px;
}
.bed-queen {
  font-size: 11px;
  color: $alltextbluecolor;
}
.price-per-night {
  font-size: 10px;
}
.price-light-through {
  text-decoration: line-through;
}
.price2 {
  font-size: 17px;
  color: $alltextbluecolor;
}
.save-price {
  font-size: 9px;
  color: $textredcolor;
}
.none-refun {
  font-size: 9px;
  color: $textredcolor;
  font-weight: bold;
}
.room-only-font {
  font-size: 9px;
  color: $textgreencolor;
  font-weight: bold;
}
.booknow-button {
  padding: 0px;
  margin-left: 65px;
}
.whole-div-font-size {
  font-size: 9px;
}
.button-maring-left {
  margin-left: 67px;
}
.advisor-button-sm {
  background-color: $textgreencolor;
  color: white;
  height: 30px;
  width: 56px;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  padding-top: 3px;
  margin-left: 23px;
}
.review-color {
  color: $textgreencolor;
  font-weight: bold;
  font-size: 10px;
}
.review-margin {
  margin-top: -7px;
}
.review-below {
  font-size: 11px;
  padding-bottom: 5px;
}
.north-star {
  font-size: 10px;
}
.more-review-font {
  color: $alltextbluecolor;
}
.ibis-font {
  font-size: 21px;
  margin-top: 5px;
}
.ibis-hotel-below {
  color: $alltextbluecolor;
  font-size: 13px;
  margin-top: -7px;
}
.sec-th-margin {
  margin-left: 6px;
  border-radius: 3px;
}
</style>
