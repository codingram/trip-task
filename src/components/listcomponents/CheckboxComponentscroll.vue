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
            <label :for="starRating.name"> {{ starRating.name }} </label>
            <span class="float-right">
              <input
                class="checkbox-edit"
                type="checkbox"
                :id="starRating.name"
              />
              <label :for="starRating.name"></label>
            </span>
          </div>
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
          name: "5 Star",
          id: "1star5"
        },
        {
          name: "4 Star",
          id: "1star4"
        },
        {
          name: "3 Star",
          id: "1star3"
        },
        {
          name: "2 Star",
          id: "1star2"
        },
        {
          name: "1 Star",
          id: "1star1"
        },
        {
          name: "Budget",
          id: "1starb"
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

label {
  margin: 0;
  cursor: pointer;
}

input[type="checkbox"] + label {
  display: block;
  cursor: pointer;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label:before {
  content: "\2714";
  border: 1px solid $dimfont;
  border-radius: 0px;
  display: inline-block;
  width: 18px;
  height: 18px;
  padding-left: 4px;
  padding-bottom: 4px;
  vertical-align: bottom;
  color: transparent;
  transition: 0.2s;
}

input[type="checkbox"]:checked + label:before {
  background-color: $orangebtn;
  border-color: $orangebtn;
  color: #fff;
}
</style>
