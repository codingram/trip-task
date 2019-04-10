<template>
  <div>
    <NavbarR></NavbarR>
    <div class="body-div">
      <SearchArea></SearchArea>

      <b-container>
        <div class="div-85 mx-auto">
          <b-row class="px-0 m-0">
            <b-col md="3 pl-0"></b-col>
            <b-col md="9 p-0">
              <Hotelcard></Hotelcard>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import NavbarR from "@/components/listcomponents/NavbarR.vue";
import SearchArea from "@/components/listcomponents/SearchArea.vue";
import Hotelcard from "@/components/listcomponents/Hotelcard.vue";
export default {
  name: "NavBar",
  components: {
    NavbarR,
    SearchArea,
    Hotelcard
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

  .div-85 {
    width: 85%;
  }
}
</style>
