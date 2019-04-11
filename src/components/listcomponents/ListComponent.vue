<template>
  <div>
    <FilterList filtertoptitle="Dubai Hotels By Star Rating">
      <template slot="listLoopData">
        <div
          class="border-bottom"
          v-for="starRating in starRatings"
          :key="starRating.index"
        >
          <div class="list-heading">
            <a href="#">{{ starRating.name }}</a>
            <span class="float-right">
              {{ starRating.number }}
            </span>
          </div>
        </div>
        <div class="showMore invisible mt-2">
          <a href="#" class="font-weight-bold">Show More</a>
        </div>
      </template>
    </FilterList>
    <!--***************-->
    <FilterList filtertoptitle="Dubai Hotels By Location">
      <template slot="listLoopData">
        <div
          class="border-bottom"
          v-for="HotelLocation in HotelLocations"
          :key="HotelLocation.index"
        >
          <div class="list-heading">
            <a href="#">{{ HotelLocation.name }}</a>
            <span class="float-right">
              {{ HotelLocation.number }}
            </span>
          </div>
        </div>
        <div class="showMore mt-2">
          <a href="#" class="font-weight-bold">Show More</a>
        </div>
      </template>
    </FilterList>
    <!--***************-->
    <FilterList filtertoptitle="Hotels By Popular Attractions">
      <template slot="listLoopData">
        <div
          class="border-bottom"
          v-for="PopularLocation in PopularLocations"
          :key="PopularLocation.index"
        >
          <div class="list-heading">
            <a href="#">{{ PopularLocation.name }}</a>
            <span class="float-right">
              {{ PopularLocation.number }}
            </span>
          </div>
        </div>
        <div class="showMore mt-2">
          <a href="#" class="font-weight-bold">Show More</a>
        </div>
      </template>
    </FilterList>
    <!--***********-->
    <FilterList filtertoptitle="Hotels In Nearby Cities">
      <template slot="listLoopData">
        <div class="border-bottom" v-for="City in Cities" :key="City.index">
          <div class="list-heading">
            <a href="#">{{ City.name }}</a>
            <span class="float-right">
              {{ City.number }}
            </span>
          </div>
        </div>
      </template>
    </FilterList>
    <!--*********Route Information******-->
    <FilterList filtertoptitle="Premium Hotels In Dubai">
      <template slot="listLoopData">
        <div class="border-bottom" v-for="Route in Routes" :key="Route.index">
          <div class="list-heading">
            <a href="#">{{ Route.name }}</a>
            <span class="float-right">
              {{ Route.number }}
            </span>
          </div>
        </div>
      </template>
    </FilterList>
  </div>
</template>

<script>
import FilterList from "@/components/listcomponents/FilterList.vue";
export default {
  name: "NavBar",
  components: {
    FilterList
  },
  data() {
    return {
      starRatings: [
        {
          name: "5 Star Hotels In Dubai",
          number: "100"
        },
        {
          name: "4 Star Hotels In Dubai",
          number: "100"
        },
        {
          name: "3 Star Hotels In Dubai",
          number: "100"
        },
        {
          name: "2 Star Hotels In Dubai",
          number: "100"
        },
        {
          name: "1 Star Hotels In Dubai",
          number: "100"
        },
        {
          name: "Budget Hotels In Dubai",
          number: "100"
        }
      ],
      HotelLocations: [
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        },
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        }
      ],
      PopularLocations: [
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        },
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        }
      ],
      Cities: [
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        },
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        }
      ],
      Routes: [
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        },
        {
          name: "Deira, Dubai",
          number: "100"
        },
        {
          name: "Bur Dubai, Dubai",
          number: "100"
        },
        {
          name: "Al Barsha, Dubai",
          number: "100"
        },
        {
          name: "Zayed Road, Dubai",
          number: "100"
        },
        {
          name: "Dubai Marina Dubai",
          number: "100"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";
</style>
