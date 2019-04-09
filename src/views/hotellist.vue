<template>
  <div>
    <NavbarR></NavbarR>
    <div class="body-div">
      <SearchArea></SearchArea>
    </div>
  </div>
</template>

<script>
import NavbarR from "@/components/listcomponents/NavbarR.vue";
import SearchArea from "@/components/listcomponents/SearchArea.vue";
export default {
  name: "NavBar",
  components: {
    NavbarR,
    SearchArea
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_rvariables.scss";
.body-div {
  background-color: $bodybackgroundcolor !important;
  height: 500px;
}
</style>
