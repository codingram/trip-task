<template>
  <div>
    <NavbarS></NavbarS>
    <citysearch></citysearch>
    <!-- <breadcum></breadcum> -->
    <roominfo></roominfo>
  </div>
</template>

<script>
import NavbarS from "@/components/NavbarS.vue";
import citysearch from "@/components/citysearch.vue";
// import breadcum from "@/components/breadcum.vue";
import roominfo from "@/components/roominfo.vue";
export default {
  name: "NavBar",
  components: {
    NavbarS,
    citysearch,
    // breadcum,
    roominfo
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
