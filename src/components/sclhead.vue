<template>
  <div>
    <b-container fluid>
      <div class="srcol-head-tab d-flex">
        <div
          class=" scroll-tab p-2   scrolltab-cursor-point"
          v-scroll-to="'#table'"
        >
          <a href="#" class="link-text-scroll text-center m-3">
            ROOMS
          </a>
        </div>
        <div
          class="p-2 scroll-tab  scrolltab-cursor-point"
          v-scroll-to="'#facility'"
        >
          <a href="#" class="link-text-scroll text-center m-3 ">
            FACILITIES
          </a>
        </div>

        <div
          class="p-2 scroll-tab  scrolltab-cursor-point"
          v-scroll-to="'#table'"
        >
          <a href="#table" class="link-text-scroll text-center m-3">
            LOCATIONS
          </a>
        </div>
        <div
          class="p-2 scroll-tab  scrolltab-cursor-point"
          v-scroll-to="'#table'"
        >
          <a href="#table" class="link-text-scroll text-center m-3">
            POLICIES
          </a>
        </div>
        <div
          class="p-2 scroll-tab  scrolltab-cursor-point"
          v-scroll-to="'#review'"
        >
          <a href="#review" class="link-text-scroll text-center m-3"
            >RATINGS AND REVIEWS</a
          >
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
@import "../assets/scss/Sstyle/scrollhead.scss";
</style>
