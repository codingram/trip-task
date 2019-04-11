<template>
  <div>
    <b-container fluid>
      <b-row class="whole-div">
        <b-col>
          <div>
            <b-row>
              <b-col md="10" class="mx-auto p-0">
                <b-row>
                  <div class="col-md-10 p-0 ">
                    <b-col
                      md="2"
                      v-for="city in cities"
                      v-bind:key="city.index"
                      class="city-display pl-0"
                    >
                      <div class="m-2">
                        <b-row>
                          <div class="col-blue-color p-2 pl-0 boxhead-style">
                            <div class="boxhead-font-size ">
                              {{ city.cityhead }}
                            </div>
                            <div class="boxtext-font-size">
                              {{ city.cityname }}
                            </div>
                          </div>
                        </b-row>
                      </div>
                    </b-col>
                  </div>
                  <div class="col-md-2 mx-auto my-auto text-left p-0  ">
                    <div class=" ">
                      <button class="search-box-margin">SEARCH</button>
                    </div>
                  </div>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cities: [
        {
          cityhead: "CITY, AREA, OR HOTEL",
          cityname: "Ibis One Central..."
        },
        {
          cityhead: "CHECK-IN",
          cityname: "Tue, 23 Apr 2019"
        },
        {
          cityhead: "CHECK-OUT",
          cityname: "Wed, 24 Apr 2019"
        },
        {
          cityhead: "ROOMS & GUESTS",
          cityname: "1 Room, 2 Adults"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.whole-div {
  background-color: $citysearchWdiv;
}
.col-blue-color {
  background-color: $citysearchWdivbox;
}
.boxhead-font-size {
  font-size: 10px;
  color: $alltextbluecolor;
}
.boxtext-font-size {
  font-size: 14px;
  color: $textwhitecolor;
}
.boxhead-style {
  display: inline;
  width: 144px;
  border-radius: 2px;
  height: 44px;
  text-align: left;
}
.city-display {
  display: inline-block;
}
.search-box-margin {
  margin-left: -244px;
  text-align: center;
  background: $allgradientbluecolor;
  color: $textwhitecolor;
  border-radius: 20px;
  width: 168px;
  height: 37px;
  border: none;
  font-weight: bold;
  font-size: 19px;
}
</style>
