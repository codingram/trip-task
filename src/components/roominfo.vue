<template>
  <div>
    <b-container>
      <b-row class="mx-auto my-auto">
        <b-col md="6"> <breadcum></breadcum></b-col>

        <b-col md="3">
          <div class="outline-whole-row3">
            Hurry! Last few rooms remaining for your dates
          </div>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0">
        <b-col md="6" class="p-0">
          <div class="p-0">
            <md-card>
              <md-card-media>
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
              </md-card-media>
            </md-card>
          </div>
        </b-col>
        <b-col md="3">
          <b-row class="img-row-p">
            <img
              src="../assets/img1.jpg"
              alt="Room image"
              height="133px"
              width="243px"
            />
          </b-row>
          <b-row>
            <b-col>
              <b-row class="div-back-image ml-0"
                ><span class="font-rest">RESTAURANT</span></b-row
              >
            </b-col>
            <b-col>
              <b-row
                ><img src="../assets/img1.jpg" height="45px" width="114px" />
              </b-row>
              <b-row class="mt-2">
                <img src="../assets/img1.jpg" height="45px" width="114px" />
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="3" class="p-0">
          <div>
            <b-row class="outline-whole-row mx-auto">
              <b-row>
                <b-col md="6">
                  <div class="text-left outline-inside-text">
                    <span>Standard room-queen Size bed</span><br />
                    <span>Non-Refundable</span><br />
                    <span>Rooms Only</span><br />
                  </div>
                </b-col>
                <b-col md="6">
                  <div class="text-right">
                    <span>Price Per Night for</span><br />
                    <span>2 Adults</span><br />
                    <span>3529</span><br />
                    <span>3,177</span><br />
                    <span>Saving rs 353</span><br />
                  </div>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <div class="text-left outline-inside-text">
                    <span>OTHERS ROOMS</span>
                  </div>
                </b-col>
                <b-col>
                  <div class="text-right outline-button ">
                    <button class="booknow-box-button">book this now</button>
                  </div>
                </b-col>
              </b-row>
            </b-row>
          </div>
          <div>
            <b-row class="outline-whole-row2 mx-auto">
              <div>
                It is a business hotel, in a very nice area, metro station just
                on the..
                <b-row>
                  <b-col class="text-left">Northstar77098|B....</b-col>
                  <b-col class="text-right">More Review</b-col>
                </b-row>
              </div>
            </b-row>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <div>Ibis one Central Hotel</div>
        <br />

        <div class="p-0">Trade Center, Dubai, 9914, United Arab Emibrates</div>
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
.swiper-style {
  height: 250px;
  background-image: url(../assets/ImagesS/roomimage.jpeg);
}
.outline-whole-row {
  border: 1px solid;
  font-size: 12px;
  border-radius: 6px;
}
.outline-inside-text {
  margin-left: 17px;
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
  border: 1px solid;
  font-size: 12px;
  margin-top: 10px;
  height: 100px;
  border-radius: 6px;
}
.outline-whole-row3 {
  border: 1px solid gray;
  font-size: 11px;
  padding: 3px;
  width: 244px;
  margin-top: 31px;
  margin-left: 278px;
  height: 28px;
  text-align: center;
  border-radius: 3px;
  color: red;
  background-color: #ff00002e;
}
.booknow-box-button {
  background: $allgradientbluecolor;
  border-radius: 20px;
  width: 143px;
  height: 29px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  color: $textwhitecolor;
}
.swiper-button-prev,
.swiper-button-next {
  background-size: 16px 44px;
}
.div-back-image {
  background: linear-gradient(rgba(13, 14, 14, 0.12), rgba(19, 21, 21, 0.83)),
    url("../assets/ImagesS/rest.jpeg");

  height: 100px;
  width: 114px;
}
.font-rest {
  color: white;
  font-size: 12px;
  margin-top: 69px;
  margin-left: 11px;
}
</style>
