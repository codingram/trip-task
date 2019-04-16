<template>
  <div class="whole-div">
    <b-container>
      <div>
        <ul class="pl-0 text-vertical-align">
          <li
            v-for="city in cities"
            v-bind:key="city.index"
            class="city-display p-0"
          >
            <div class="col-blue-color p-1 pl-2  boxhead-style ">
              <div class="boxhead-font-size">{{ city.cityhead }}</div>
              <div class="boxtext-font-size">{{ city.cityname }}</div>
            </div>
          </li>
          <li>
            <button class="search-box-margin ml-4">SEARCH</button>
          </li>
        </ul>
      </div>
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
