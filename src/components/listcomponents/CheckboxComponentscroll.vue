<template>
  <div>
    <FilterCheckbox filtertoptitle="Dubai Hotels By Star Rating">
      <template slot="checkboxLoopData">
        <div
          class="border-bottom"
          v-for="starRating in starRatings"
          :key="starRating.index"
        >
          <div class="checkbox-heading">
            {{ starRating.name }}
            <span class="float-right">
              <input class="checkbox-edit" type="checkbox" />
            </span>
          </div>
        </div>
        <div class="showMore invisible mt-2">
          <a href="#" class="font-weight-bold">Show More</a>
        </div>
      </template>
    </FilterCheckbox>
  </div>
</template>

<script>
import FilterCheckbox from "@/components/listcomponents/FilterCheckbox.vue";
export default {
  name: "NavBar",
  components: {
    FilterCheckbox
  },
  data() {
    return {
      starRatings: [
        {
          name: "5 Star"
        },
        {
          name: "4 Star"
        },
        {
          name: "3 Star"
        },
        {
          name: "2 Star"
        },
        {
          name: "1 Star"
        },
        {
          name: "Budget"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";
.checkboxfilter {
  background-color: #ffffff;
  font-size: 10px;
  color: $dimfont;
  height: 162px;
  padding: 0px;
  overflow-y: scroll;
}
</style>
