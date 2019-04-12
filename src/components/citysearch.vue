<template>
  <div>
    <b-container fluid>
      <b-row class="whole-div">
        <b-col>
          <div>
            <b-row>
              <b-col md="10" class="mx-auto p-0">
                <div>
                  <b-row>
                    <!-- room search info details-box-->
                    <b-col md="10" class="p-0">
                      <div>
                        <b-col
                          md="2"
                          v-for="city in cities"
                          v-bind:key="city.index"
                          class="city-display pl-0"
                        >
                          <div class="m-2">
                            <b-row>
                              <div
                                class="col-blue-color p-2 pl-0 boxhead-style"
                              >
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
                    </b-col>
                    <!-- search button -->
                    <div class=" mx-auto my-auto text-left p-0  ">
                      <b-col md="2">
                        <button class="search-box-margin">SEARCH</button>
                      </b-col>
                    </div>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      components: {
        Datepicker
      },
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
@import "../assets/scss/Sstyle/citysearch.scss";
</style>
