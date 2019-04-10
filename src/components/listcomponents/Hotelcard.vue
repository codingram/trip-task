<template>
  <div class="mt-3">
    <b-row class="border m-0">
      <b-col md="10" class="p-0 card-hotel-descriptionSide">
        <b-row class="p-2">
          <b-col md="4" class="card-hotel-image-slider">
            <div style="height:150px" class="hotel-swiper">
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
          <b-col md="8" class="card-hotel-details pl-1">
            <div class="card-hotel-name">
              Ibis One Central Hotel
              <span>
                <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
              </span>
            </div>
            <div class="card-hotel-place">
              Dubai, Dubai, UAE, Dubai
            </div>
            <div class="card-hotel-maplink">
              <a href="#">View On Map</a>
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                class="mapicon mx-2"
              />
              <span class="card-hotel-landmark">
                1.7km from Dubai International Finance Center
              </span>
            </div>
            <div class="card-hotel-overallRating">
              <span class="hotel-rating">
                <font-awesome-icon
                  :icon="['fas', 'globe-europe']"
                  class="globeicon mr-1"
                />
                3.8/5
              </span>
              <span class="hotel-reviewCount">(16 reviews)</span>
            </div>
            <div class="card-hotel-latestReview">
              <span class="hotel-latestRating">4</span>
              <span class="hotel-raterUsername">Ashish Abraham</span>
              <span class="hotel-reviewDate">(Feb 27, 2019)</span>
            </div>
            <div class="card-hotel-description">
              <span class="hotel-description">
                Located at a distance of 8 km from the Du...
              </span>
              <a href="#">more</a>
            </div>
            <div class="card-hotel-review">
              <span class="hotel-review">
                Shop till you drop at the Dubai Mall (3.5 km away).
              </span>
            </div>
            <div class="card-hotel-review">
              <span class="hotel-review">
                Try a wide variety of Indian delicacies at Dip In Brilliat
                (300m).
              </span>
            </div>
          </b-col>
        </b-row>
        <div class="card-hotel-deals mt-4">
          <b-col md="12">
            <b-row>
              <b-col md="1" class="p-0 ml-2">
                <span class="deal-logo">DEALS</span>
              </b-col>
              <b-col md="8" class="pr-5">
                <p class="deal-text">
                  Get cashback of Rs. 270 to all credit and debit cards within
                  next 72 hours, T&C's apply
                </p>
              </b-col>
            </b-row>
          </b-col>
        </div>
      </b-col>
      <b-col md="2" class="card-hotel-bookingSide px-2">
        <div>
          <span class="mmt-assured-logo">
            <font-awesome-icon
              :icon="['fas', 'bookmark']"
              class="bookmarkicon"
            />MMT ASSURED
          </span>
        </div>
        <div class="hotel-price mt-3 text-right">
          <span class="red-price">Rs. 3,009</span>
        </div>
        <div class="hotel-pricetime">
          <span class="pricetime">per room/night</span>
        </div>
        <div class="hotel-breakfast mb-2">
          <span class="breakfast">Includes Breakfast</span>
        </div>
        <div class="hotel-freeCancellation">
          <span class="freeCancellation">Free Cancellation</span>
        </div>
        <div class="choosebtndiv">
          <button class="btn choosebtn px-3">Choose Dates</button>
        </div>
      </b-col>
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
        loopedSlides: 4
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
// swiper slide
.card-hotel-descriptionSide {
  background-color: #fff;
  .card-hotel-image-slider {
    .swiper-slide {
      background-size: cover;
      background-position: center;
      &.slide-1 {
        width: 100%;
        background-image: url("../../assets/imagesR/backimage.jpg");
      }
      &.slide-2 {
        width: 100%;
        background-image: url("../../assets/imagesR/backimage.jpg");
      }
      &.slide-3 {
        width: 100%;
        background-image: url("../../assets/imagesR/backimage.jpg");
      }
      &.slide-4 {
        width: 100%;
        background-image: url("../../assets/imagesR/backimage.jpg");
      }
      &.slide-5 {
        width: 100%;
        background-image: url("../../assets/imagesR/backimage.jpg");
      }
    }
    //***** swiper thumbnails start*****
    .gallery-top {
      height: 100% !important;
      width: 100%;
    }
    .gallery-thumbs {
      height: 25% !important;
      box-sizing: border-box;
      padding: 3px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.8;
    }
    //*****swiper thumbnail end*****
  }
  .card-hotel-details {
    line-height: 20px;
    .card-hotel-name {
      font-weight: 700;
      color: $cardhotelname;

      .staricon {
        margin: 3px 2px;
        font-size: 10px;
        color: $starcolor;
      }
    }

    .card-hotel-place {
      color: $dimfont;
      font-size: 10px;
    }
    .card-hotel-maplink {
      font-size: 10px;

      .mapicon {
        color: $orangebtn;
      }

      .card-hotel-landmark {
        color: $dimfont;
        font-size: 10px;
      }
    }
    .card-hotel-overallRating {
      font-size: 10px;
      .hotel-rating {
        color: $greentext;
        .globeicon {
          font-size: 11px;
        }
      }
      .hotel-reviewCount {
        color: $cardhotelname;
      }
    }

    .card-hotel-latestReview {
      font-size: 10px;
      color: $dimmerfont;
      .hotel-latestRating {
        color: $greentext;
        border: 1px solid $greentext;
        border-radius: 4px;
        padding: 0 2px;
      }
      .hotel-raterUsername {
      }
      .hotel-reviewDate {
      }
    }
    .card-hotel-description {
      font-size: 10px;
      .hotel-description {
        color: $dimfont;
      }
    }

    .card-hotel-review {
      margin-bottom: 6px;
      .hotel-review {
        font-size: 10px;
        color: $dimfont;
        border: 1px solid $dimmerfont;
        border-radius: 15px;
        padding: 5px 7px;
      }
    }
  }

  .card-hotel-deals {
    border-top: 1px solid $dimmerfont;
    // padding-top: 10px;
    .deal-logo {
      background-color: $dimfont;
      color: #fff;
      padding: 3px 12px 3px 5px;
      font-size: 10px;
    }
    .deal-text {
      font-size: 10px;
      color: $dimfont;
      margin-bottom: 5px;
    }
  }
}

.card-hotel-bookingSide {
  line-height: 19px;
  background-color: $bodybackgroundcolor;
  .mmt-assured-logo {
    background-color: $mmtAssuredbg;
    font-size: 9px;
    color: #fff;
    font-weight: bold;
    padding: 5px 6px;

    .bookmarkicon {
      font-size: 24px;
      position: relative;
      top: 9px;
      margin-right: 2px;
      color: $mmtAssuredTick;
    }
  }

  .hotel-price {
    .red-price {
      color: red;
    }
  }

  .hotel-pricetime {
    text-align: right;
    .pricetime {
      font-size: 10px;
      color: $dimfont;
    }
  }

  .hotel-breakfast {
    text-align: right;
    .breakfast {
      color: $greentext;
      font-size: 10px;
    }
  }

  .hotel-freeCancellation {
    text-align: right;
    padding-right: 5px;
    .freeCancellation {
      font-size: 11px;
      color: $greentext;
    }
  }

  .choosebtndiv {
    text-align: right;
    .choosebtn {
      background-color: $orangebtn;
      color: #fff;
      font-size: 10px;
    }
  }
}
</style>
