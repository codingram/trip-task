<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <b-tabs>
          <b-tab title="ROOMS ">
            <b-card-text> <table1></table1> </b-card-text
          ></b-tab>
          <b-tab title="FACILITIES ">
            <b-card-text> <table1></table1> </b-card-text>
          </b-tab>
          <b-tab title="POLICIES">
            <b-card-text> </b-card-text>
          </b-tab>
          <b-tab title="RATING AND REVIEWS">
            <b-card-text> </b-card-text>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import table1 from "@/components/table.vue";

export default {
  name: "NavBar",
  components: {
    table1
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.nav-tabs .nav-link {
  border: none;
  color: black;
}
.nav-tabs {
  border-bottom: 1px solid #80808026;
  box-shadow: 2px 2px 2px 1px #80808052;
  margin-bottom: 80px;
  padding-left: 72px;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: $alltextbluecolor;
  border-bottom: 2px solid $alltextbluecolor;
  padding-bottom: 3px;
}
</style>
