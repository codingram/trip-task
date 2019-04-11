<template>
  <div>
    <NavbarR></NavbarR>
    <div class="body-div">
      <SearchArea></SearchArea>
      <b-container>
        <div class="div-85 mx-auto">
          <b-row class="px-0 m-0">
            <b-col md="3 pl-0">
              <LeftsideTitle></LeftsideTitle>
              <CompoListSelector></CompoListSelector>
              <FilterCheckbox></FilterCheckbox>
              <FilterCheckbox
                filtertoptitle="Hotel Facilities"
              ></FilterCheckbox>
              <Filterinput></Filterinput>
              <ListComponent></ListComponent>
            </b-col>
            <b-col md="9 p-0">
              <Hotelcard></Hotelcard>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <BottomFooter></BottomFooter>
  </div>
</template>

<script>
import NavbarR from "@/components/listcomponents/NavbarR.vue";
import SearchArea from "@/components/listcomponents/SearchArea.vue";
import Hotelcard from "@/components/listcomponents/Hotelcard.vue";
import LeftsideTitle from "@/components/listcomponents/LeftsideTitle.vue";
import CompoListSelector from "@/components/listcomponents/CompoListSelector.vue";
import FilterCheckbox from "@/components/listcomponents/FilterCheckbox.vue";
import Filterinput from "@/components/listcomponents/Filterinput.vue";
import ListComponent from "@/components/listcomponents/ListComponent.vue";
import BottomFooter from "@/components/listcomponents/BottomFooter.vue";
export default {
  name: "NavBar",
  components: {
    NavbarR,
    SearchArea,
    Hotelcard,
    LeftsideTitle,
    CompoListSelector,
    FilterCheckbox,
    Filterinput,
    ListComponent,
    BottomFooter
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
  height: auto;

  .div-85 {
    width: 85%;
  }
}
</style>
