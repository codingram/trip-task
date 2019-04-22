<template>
  <b-container>
    <div class="mt-4 mb-4">
      <b-row>
        <b-col md="5" class="d-flex pl-0">
          <div class="text-center review-col1-divborder w-25">
            <div class="review-col1-bg m-0 ">
              <span class="review-div1-numsize font-weight-bold">4.0</span>
              <div class="div1-lineheight">
                <span class="review-div1-fontsize">920 Reviews</span>
              </div>
            </div>
            <div class=" p-1 d-flex justify-content-center">
              <div class="my-auto">
                <font-awesome-icon :icon="['fab', 'tripadvisor']" />
              </div>
              <div class="icon-color icon-size my-auto">
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['far', 'circle']" />
              </div>
            </div>
          </div>
          <div class="review-col2-numsize my-auto w-75 ">
            <div class="review-col2-border pr-3 ml-3 d-flex ">
              <div class="w-100">
                <div class="review-col2-relative">
                  <span
                    class="review-col2-div-bgwhite font-weight-bold p-1 grade-fontsize"
                    >EXCELLENT</span
                  >
                  <span
                    class="float-right review-col2-div-bgwhite review-numsize p-1"
                    >395 Reviews</span
                  >
                  <hr class="review-hr-position" />
                </div>
                <div class="review-col2-relative">
                  <span
                    class="review-col2-div-bgwhite font-weight-bold p-1 grade-fontsize p-1"
                    >VERY GOOD</span
                  >
                  <span
                    class="float-right review-col2-div-bgwhite review-numsize p-1"
                    >300 Reviews</span
                  >
                  <hr class="review-hr-position" />
                </div>
                <div class="review-col2-relative">
                  <span
                    class="review-col2-div-bgwhite font-weight-bold p-1 grade-fontsize"
                    >AVERAGE</span
                  >
                  <span
                    class="float-right review-col2-div-bgwhite review-numsize p-1"
                    >130 Reviews</span
                  >
                  <hr class="review-hr-position" />
                </div>
                <div class="review-col2-relative">
                  <span
                    class="review-col2-div-bgwhite font-weight-bold p-1 grade-fontsize"
                    >POOR</span
                  >
                  <span
                    class="float-right review-col2-div-bgwhite review-numsize p-1"
                    >44 Reviews</span
                  >
                  <hr class="review-hr-position" />
                </div>
                <div class="review-col2-relative">
                  <span
                    class="review-col2-div-bgwhite font-weight-bold p-1 grade-fontsize"
                  >
                    BAD</span
                  >
                  <span
                    class="float-right review-col2-div-bgwhite review-numsize p-1"
                  >
                    51 Reviews</span
                  >
                  <hr class="review-hr-position" />
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="7" class="my-auto">
          <div class="d-inline-flex">
            <div class="location-margin mr-5 ">
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['far', 'circle']" />
              <span class="icon-color-display"> LOCATION </span>
            </div>
            <div class="location-margin mr-5">
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['far', 'circle']" />
              <span class="icon-color-display"> ROOM </span>
            </div>
            <div class="location-margin mr-5">
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['far', 'circle']" />
              <span class="icon-color-display"> SERVICE </span>
            </div>
            <div class="location-margin mr-5">
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['far', 'circle']" />
              <span class="icon-color-display"> CLEANLINESS </span>
            </div>
            <div class="location-margin mr-5">
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['fas', 'dot-circle']" />
              <font-awesome-icon :icon="['far', 'circle']" />
              <span class="icon-color-display"> SLEEP</span>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-row
      class="div-border-review mb-4"
      v-for="review in reviews"
      v-bind:key="review.index"
    >
      <div>
        <div class="icon-color font-weight-bold ">
          <span>{{ review.reviewhead }}</span>
          <span class="review-dot-icon ml-3">
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['far', 'circle']" />
          </span>
        </div>
        <div class="comment-lightgray-head mb-2">
          {{ review.reviewname }}
        </div>
        <div class="para-font-size">{{ review.reviewpara }}</div>
      </div>
    </b-row>
    <b-row>
      <div class="powered-fontsize">
        <span class="powered-font-color mr-2"> Powered by </span>
        <span class="cursor-pointer-text">
          <span class="trip-icon-color">
            <font-awesome-icon :icon="['fab', 'tripadvisor']" />
          </span>
          <span class="font-weight-bold trip-advisor-fontsize"> trip</span>
          <span
            class="advisor-font-color font-weight-bold trip-advisor-fontsize"
            >advisor</span
          >
        </span>
      </div>
      <div class="ml-auto allreview-font font-weight-bold ">
        <a href="" class="mr-2 cursor-pointer-text text-hover-color"
          >ALL REVIEWS</a
        >
        <span class="mr-2 slash-color">|</span>
        <a href="" class="cursor-pointer-text text-hover-color">
          WRITE YOUR OWN REVIEW</a
        >
      </div>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      reviews: [
        {
          reviewhead: "Good Value and well located",
          reviewname: "NTGlobal, BUISNESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NTGlobal, BUISNESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NTGlobal, BUISNESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NTGlobal, BUISNESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NTGlobal, BUISNESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/Sstyle/reviews.scss";
</style>
