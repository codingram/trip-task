<template>
  <b-row>
    <b-col md="10">
      <b-row>
        <b-col md="8" v-for="review in reviews" v-bind:key="review.index">
          <div>{{ review.reviewhead }}</div>
          <div>{{ review.reviewname }}</div>
          <div>{{ review.reviewpara }}</div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      reviews: [
        {
          reviewhead: "Good Value and well located",
          reviewname: "NT Global, BUSSINESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
      ]
    };
  }
};
</script>
