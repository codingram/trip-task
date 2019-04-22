<template>
  <b-container>
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
<style lang="scss">
@import "../assets/scss/Sstyle/reviewtab.scss";
</style>
