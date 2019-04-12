<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <b-tabs>
          <b-tab title="TRIPADVISOR " class="headfont">
            <reviews></reviews>
          </b-tab>

          <b-tab title="MAKEMYTRIP ">
            <reviews></reviews>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import reviews from "@/components/reviews.vue";

export default {
  name: "NavBar",
  components: {
    reviews
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.font-size {
  border-bottom: 1px solid #8080805c;
  -webkit-box-shadow: 0px 9px 0px 1px #b1a8a812;
  box-shadow: 0px 9px 0px 1px #b1a8a812;
  margin-bottom: 30px;
  font-size: 13px;
  font-weight: bold;
}
.nav-link {
  color: #008cff;
  border-bottom: 2px solid #008cff;
  padding-bottom: 5px;
  font-weight: bold;
  font-weight: bold;
  padding-left: 5px;
}
</style>
