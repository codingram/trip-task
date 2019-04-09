<template>
  <div>
    <NavbarS></NavbarS>
    <citysearch></citysearch>
    <breadcum></breadcum>
  </div>
</template>

<script>
import NavbarS from "@/components/NavbarS.vue";
import citysearch from "@/components/citysearch.vue";
import breadcum from "@/components/breadcum.vue";
export default {
  name: "NavBar",
  components: {
    NavbarS,
    citysearch,
    breadcum
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
