<template>
  <div>
    <b-container fluid>
      <div class="srcol-head-tab">
        <div class="row-display-inline">
          <div id="f" class="p-2 div-curosor-point" v-scroll-to="'#table'">
            <a href="#" class="link-text-scroll text-center m-3">
              ROOMS
            </a>
          </div>
          <div id="f" class="p-2 div-curosor-point" v-scroll-to="'#facility'">
            <a href="#" class="link-text-scroll text-center m-3 ">
              FACILITIES
            </a>
          </div>

          <div id="f" class="p-2 div-curosor-point" v-scroll-to="'#table'">
            <a href="#table" class="link-text-scroll text-center m-3">
              LOCATIONS
            </a>
          </div>
          <div id="f" class="p-2 div-curosor-point" v-scroll-to="'#table'">
            <a href="#table" class="link-text-scroll text-center m-3">
              POLICIES
            </a>
          </div>
          <div id="f" class="p-2 div-curosor-point" v-scroll-to="'#review'">
            <a href="#review" class="link-text-scroll text-center m-3"
              >RATINGS AND REVIEWS</a
            >
          </div>
        </div>
      </div>
    </b-container>

    <div id="table">
      <table1></table1>
    </div>
    <div id="facility">
      <facilities></facilities>
    </div>
    <div id="review">
      <reviewtab></reviewtab>
    </div>
  </div>
</template>
<script>
import facilities from "@/components/facilities.vue";
import table1 from "@/components/table.vue";
import reviewtab from "@/components/reviewtab.vue";
export default {
  name: "NavBar",
  components: {
    facilities,
    table1,
    reviewtab
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.srcol-head-tab {
  border-bottom: 1px solid #8080805c;
  box-shadow: 0px 9px 0px 1px #b1a8a812;
  padding-left: 78px;
  font-size: 13px;
  font-weight: bold;
}
.link-text-scroll {
  color: #443d3d;
  text-decoration: none;
}
.link-text-scroll:hover {
  color: $alltextbluecolor;
  text-decoration: none;
}
#f:hover {
  border-bottom: 3px solid $alltextbluecolor;
  color: $alltextbluecolor;
}
.row-display-inline {
  display: inline-flex;
}
.div-curosor-point {
  cursor: pointer;
}
</style>
