<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <b-tabs>
          <b-tab title="TRIPADVISOR ">
            <b-card-text> <reviews></reviews> </b-card-text
          ></b-tab>
          <b-tab title="MAKEMYTRIP ">
            <b-card-text> <reviews></reviews> </b-card-text>
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
<style lang="scss" scoped></style>
