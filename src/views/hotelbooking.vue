<template>
  <div>
    <NavbarS></NavbarS>
    <citysearch></citysearch>

    <roominfo></roominfo>
    <table1></table1>
    <facilities></facilities>
    <reviews></reviews>
  </div>
</template>

<script>
import NavbarS from "@/components/NavbarS.vue";
import citysearch from "@/components/citysearch.vue";
import reviews from "@/components/reviews.vue";
import roominfo from "@/components/roominfo.vue";
import facilities from "@/components/facilities.vue";
import table1 from "@/components/table.vue";
export default {
  name: "NavBar",
  components: {
    NavbarS,
    citysearch,
    roominfo,
    reviews,
    facilities,
    table1
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
