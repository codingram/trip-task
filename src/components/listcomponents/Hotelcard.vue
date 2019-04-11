<template>
  <div>
    <div class="sortby text-right mt-4 mb-2">
      Sort By:
      <select class="selectType ml-2">
        <option value="">Popularity</option>
        <option value="">Popularity</option>
        <option value="">Popularity</option>
      </select>
    </div>
    <div class="mb-3" v-for="card in cards" :key="card.index">
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
                {{ card.hotelName }}
                <span>
                  <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                  <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                  <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                  <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                  <font-awesome-icon :icon="['fas', 'star']" class="staricon" />
                </span>
              </div>
              <div class="card-hotel-place">
                {{ card.hotelPlace }}
              </div>
              <div class="card-hotel-maplink">
                <a href="#">View On Map</a>
                <font-awesome-icon
                  :icon="['fas', 'map-marker-alt']"
                  class="mapicon mx-2"
                />
                <span class="card-hotel-landmark">
                  {{ card.hotelLandmark }}
                </span>
              </div>
              <div class="card-hotel-overallRating">
                <span class="hotel-rating">
                  <font-awesome-icon
                    :icon="['fas', 'globe-europe']"
                    class="globeicon mr-1"
                  />
                  {{ card.hotelRating }}
                </span>
                <span class="hotel-reviewCount">{{
                  card.hotelReviewCount
                }}</span>
              </div>
              <div class="card-hotel-latestReview">
                <span class="hotel-latestRating">{{ card.latestRating }}</span>
                <span class="hotel-raterUsername">{{
                  card.raterUsername
                }}</span>
                <span class="hotel-reviewDate">{{ card.reviewDate }}</span>
              </div>
              <div class="card-hotel-description">
                <span class="hotel-description">
                  {{ card.hotelDescription }}
                </span>
                <a href="#">more</a>
              </div>
              <div class="card-hotel-review">
                <span class="hotel-review">
                  {{ card.hotelReview1 }}
                </span>
              </div>
              <div class="card-hotel-review">
                <span class="hotel-review">
                  {{ card.hotelReview2 }}
                </span>
              </div>
            </b-col>
          </b-row>
          <div v-if="card.showDeal">
            <div class="card-hotel-deals mt-4">
              <b-col md="12">
                <b-row>
                  <b-col md="1" class="p-0 ml-2">
                    <span class="deal-logo">DEALS</span>
                  </b-col>
                  <b-col md="8" class="pr-5">
                    <p class="deal-text">
                      {{ card.dealText }}
                    </p>
                  </b-col>
                </b-row>
              </b-col>
            </div>
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
          <div v-if="card.breakfast">
            <div class="hotel-breakfast mb-2">
              <span class="breakfast">Includes Breakfast</span>
            </div>
          </div>
          <div v-if="card.freeCancellation">
            <div class="hotel-freeCancellation">
              <span class="freeCancellation">Free Cancellation</span>
            </div>
          </div>
          <div class="choosebtndiv">
            <button class="btn choosebtn px-3">Choose Dates</button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelCard",
  data() {
    return {
      cards: [
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        },
        {
          hotelName: "Ibis One Central Hotel",
          hotelPlace: "Dubai, Dubai, UAE, Dubai",
          hotelLandmark: "1.7km from Dubai International Finance Center",
          hotelRating: "3.8/5",
          hotelReviewCount: "(16 reviews)",
          latestRating: "4",
          raterUsername: "Ashish Abraham",
          reviewDate: "(Feb 27, 2019)",
          hotelDescription: "Located at a distance of 8 km from the Du...",
          hotelReview1: "Shop till you drop at the Dubai Mall (3.5 km away).",
          hotelReview2:
            "Try a wide variety of Indian delicacies at Dip In Brilliat (300m).",
          showDeal: true,
          dealText:
            "Get cashback of Rs. 270 to all credit and debit cards within next 72 hours, T&C's apply",
          price: "Rs. 3,009",
          pricetime: "per room/night",
          breakfast: true,
          freeCancellation: true
        }
      ],
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
.sortby {
  font-size: 10px;
  color: $dimfont;
  .selectType {
    padding: 1px;
    background-color: #fff;
    width: 15%;
    color: $dimfont;
  }
}
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
      font-size: 25px;
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
