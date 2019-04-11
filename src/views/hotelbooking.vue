<template>
  <div>
    <NavbarS></NavbarS>
    <citysearch></citysearch>
    <roominfo></roominfo>
    <slider2></slider2>
    <tabs1></tabs1>
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
import tabs1 from "@/components/tabs.vue";
import slider2 from "@/components/slider.vue";

export default {
  name: "NavBar",
  components: {
    NavbarS,
    citysearch,
    roominfo,
    reviews,
    facilities,
    slider2,
    tabs1
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
