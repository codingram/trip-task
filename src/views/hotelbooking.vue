<template>
  <div>
    <NavbarS></NavbarS>
    <citysearch></citysearch>
    <roominfo></roominfo>
    <slider2></slider2>
    <scrolltab></scrolltab>
  </div>
</template>

<script>
import NavbarS from "@/components/NavbarS.vue";
import citysearch from "@/components/citysearch.vue";
import roominfo from "@/components/roominfo.vue";
import slider2 from "@/components/slider.vue";
import scrolltab from "@/components/sclhead.vue";

export default {
  name: "NavBar",
  components: {
    NavbarS,
    citysearch,
    roominfo,
    slider2,
    scrolltab
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
