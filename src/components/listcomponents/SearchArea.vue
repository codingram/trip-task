<template>
  <div>
    <b-container>
      <div class="backimage mx-auto">
        <div class="mx-2 pt-1 links">
          <a href="#" class="border-bottom mr-1">Home</a>
          »
          <a href="#" class="border-bottom mr-1 ml-1">International Hotels</a>
          »
          <a href="#" class="border-bottom mr-1 ml-1"
            >United Arab Emeriates Hotels</a
          >
          »
          <a href="#">{{ backimgTitle }}</a>
        </div>
        <div class="text-center">
          <p class="backimgtitle font-weight-bold mb-0">{{ backimgTitle }}</p>
          <div class="backimgtext" v-html="backimgText"></div>
        </div>
        <div class="mt-5 mx-4">
          <b-row class="mx-1 searchbox">
            <b-col md="3" class="search-hotel">
              <div class="searchbox-title">CITY, HOTEL OR AREA</div>
              <div>
                <input type="text" class="searchbox-input-hotel" />
              </div>
            </b-col>
            <b-col md="2" class="checkin-date">
              <div class="datebox-title">CHECK IN</div>
              <div>
                <!-- <input type="date" class="searchbox-date-hotel" /> -->

                <Datepicker
                  class="searchbox-date-hotel pt-1"
                  value="Mon 1st April 2019"
                  placeholder="Select Date"
                  format="D dsu MMMM yyyy"
                ></Datepicker>
              </div>
            </b-col>
            <b-col md="2" class="checkout-date">
              <div class="datebox-title">CHECK OUT</div>
              <div>
                <!-- <input type="date" class="searchbox-date-hotel" /> -->
                <Datepicker
                  class="searchbox-date-hotel pt-1"
                  value="Mon 1st April 2019"
                  placeholder="Select Date"
                  format="D dsu MMMM yyyy"
                ></Datepicker>
              </div>
            </b-col>
            <b-col md="1" class="nights-number">
              <div class="night-title">NIGHT</div>
              <div>
                <input
                  type="number"
                  class="searchbox-night-hotel"
                  min="0"
                  value="1"
                />
              </div>
            </b-col>
            <b-col md="2" class="rooms-select">
              <div class="rooms-title">ROOMS/GUESTS</div>
              <div>
                <select class="searchbox-rooms-hotel">
                  <option value="">1 Room, 2 Guests</option>
                  <option value="">1 Room, 3 Guests</option>
                  <option value="">1 Room, 4 Guests</option>
                </select>
              </div>
            </b-col>
            <b-col md="2" class="">
              <button class="btn searchbtn ml-4 px-3">Search</button>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "NavBar",
  data() {
    return {
      backimgTitle: "Hotels In Dubai",
      backimgText:
        '(568 Hotels in Dubai Price Starts @ Rs. 1579 - Get Flat OFF use Coupon - <span class="green-text">IHSALE25</span>)'
    };
  },
  components: {
    Datepicker
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/_rvariables.scss";
.backimage {
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url("../../assets/imagesR/backimage.jpg");
  height: 210px;
  background-size: cover;
  width: 85%;
  background-position: center;
  color: #fff;

  .links {
    font-size: $cardfont;
    transform: scale(0.95, 1.2);
    a {
      text-decoration: none;
      color: #fff;
      // letter-spacing: 0px;
    }
  }

  .backimgtitle {
    font-size: 32px;
  }

  .backimgtext {
    font-size: 16px;

    .green-text {
      color: #60ae20;
      font-weight: 700;
    }
  }

  .searchbox {
    background-color: #fff;
    border-radius: 2px;
    padding: 10px 0;

    .search-hotel {
      border-right: 1px solid #d2d2d2;

      .searchbox-title {
        font-size: $cardfont;
        color: $dimfont;
      }

      .searchbox-input-hotel {
        background: transparent;
        color: $fontcolor;
        font-size: 12px;
        border: 0;
        width: 100%;
        border-bottom: 1px solid #ababab;

        &:focus {
          outline: none;
        }
      }
    }

    .checkin-date {
      .datebox-title {
        font-size: $cardfont;
        color: $dimfont;
      }

      .searchbox-date-hotel {
        background: transparent;
        color: $fontcolor;
        font-size: 12px;
        border: 0;
        width: 100%;
        // border-bottom: 1px solid #ababab;

        &:focus {
          outline: none;
        }
      }
    }

    .checkout-date {
      .datebox-title {
        font-size: $cardfont;
        color: $dimfont;
      }

      .searchbox-date-hotel {
        background: transparent;
        color: $fontcolor;
        font-size: 12px;
        border: 0;
        width: 100%;
        // border-bottom: 1px solid #ababab;

        &:focus {
          outline: none;
        }
      }
    }

    .nights-number {
      border-right: 1px solid #d2d2d2;

      .night-title {
        font-size: $cardfont;
        color: $dimfont;
      }

      .searchbox-night-hotel {
        background: transparent;
        color: $fontcolor;
        font-size: 12px;
        border: 0;
        width: 100%;
        // border-bottom: 1px solid #ababab;

        &:focus {
          outline: none;
        }
      }
    }

    .rooms-select {
      .rooms-title {
        font-size: $cardfont;
        color: $dimfont;
      }

      .searchbox-rooms-hotel {
        background: transparent;
        color: $fontcolor;
        font-size: 12px;
        border: 0;
        width: 100%;
        // border-bottom: 1px solid #ababab;

        &:focus {
          outline: none;
        }
      }
    }

    .searchbtn {
      background-color: $orangebtn;
      color: #fff;
      font-size: 12px;
    }
  }
}
.vdp-datepicker * {
  border: 0;
}
</style>
