<template>
  <div>
    <NavbarS></NavbarS>
    <citysearch></citysearch>

    <roominfo></roominfo>
    <reviews></reviews>
  </div>
</template>

<script>
import NavbarS from "@/components/NavbarS.vue";
import citysearch from "@/components/citysearch.vue";
import reviews from "@/components/reviews.vue";
import roominfo from "@/components/roominfo.vue";
export default {
  name: "NavBar",
  components: {
    NavbarS,
    citysearch,
    roominfo,
    reviews
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
