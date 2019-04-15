<template>
  <div class="whole-div">
    <b-container>
      <b-row>
        <b-col>
          <b-col
            md="2"
            v-for="city in cities"
            v-bind:key="city.index"
            class="city-display p-0"
          >
            <b-row>
              <div class="col-blue-color p-1 m-2 pl-0 boxhead-style">
                <div class="boxhead-font-size ">
                  {{ city.cityhead }}
                </div>
                <div class="boxtext-font-size">
                  {{ city.cityname }}
                </div>
              </div>
            </b-row>
          </b-col>
        </b-col>
        <!-- search button -->
        <div class=" mx-auto my-auto text-left p-0  ">
          <b-col md="2">
            <button class="search-box-margin">SEARCH</button>
          </b-col>
        </div>
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
          cityname: "Ibis One Central Hotel"
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
@import "../assets/scss/Sstyle/citysearch.scss";
</style>
