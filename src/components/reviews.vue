<template>
  <b-container>
    <div class="mt-4 mb-4">
      <b-row>
        <b-col md="5" class="d-flex pl-0">
          <div class="text-center review-col1-divborder w-25">
            <div class="review-col1-bg m-0 ">
              <div>
                <span class="review-div1-numsize font-weight-bold">4.0</span>
              </div>
              <div>
                <span class="review-div1-fontsize">920 Reviews</span>
              </div>
            </div>
            <div class=" p-1">
              <div class="review-col1-icon">
                <font-awesome-icon :icon="['fab', 'tripadvisor']" />
              </div>
              <div class="icon-color icon-size review-col1-icon">
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
              <!-- <div class="w-75">
                <span class="review-grade-db"
                  >EXCELLENT
                  <hr class="review-hr-text"
                /></span>
                <span class="review-grade-db"
                  >VERY GOOD
                  <hr class="review-hr-text"
                /></span>
                <span class="review-grade-db"
                  >AVERGAGE
                  <hr class="review-hr-text"
                /></span>
                <span class="review-grade-db"
                  >POOR
                  <hr class="review-hr-text"
                /></span>
                <span class="review-grade-db"
                  >BAD
                  <hr class="review-hr-text"
                /></span>
              </div>
              <div class="75">
                <span class="review-grade-db">
                  395 Reviews
                </span>
                <span class="review-grade-db">
                  395 Reviews
                </span>
                <span class="review-grade-db">
                  395 Reviews
                </span>
                <span class="review-grade-db">
                  395 Reviews
                </span>
                <span class="review-grade-db">
                  395 Reviews
                </span>
              </div> -->
              <!-- <div>
                <span class="font-weight-bold text-left">EXCELLENT</span>
                <hr class="review-hr-text" />
                <span class="text-right">395 Reviews</span>
              </div>
              <div>
                <span class="font-weight-bold text-left">VERY GOOD</span>
                <hr class="review-hr-text" />
                <span class="text-right">300 Reviews</span>
              </div>
              <div>
                <span class="font-weight-bold text-left">AVERGAGE</span>
                <hr class="review-hr-text" />
                <span class="text-right">395 Reviews</span>
              </div>
              <div>
                <span class="font-weight-bold text-left">POOR</span>
                <hr class="review-hr-text" />
                <span class="text-right">44 Reviews</span>
              </div>
              <div>
                <span class="font-weight-bold text-left">BAD</span>
                <hr class="review-hr-text" />
                <span class="text-right">51 Reviews</span>
              </div> -->
            </div>
          </div>
        </b-col>
        <b-col md="7" class="my-auto">
          <div class="d-inline-flex">
            <div class="location-margin mr-5 ml-3">
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
        <div class="icon-color font-weight-bold">
          {{ review.reviewhead }}
          <span class="review-dot-icon">
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['far', 'circle']" />
          </span>
        </div>
        <div class="comment-lightgray-head pb-2">
          {{ review.reviewname }}
        </div>
        <div class="para-font-size">{{ review.reviewpara }}</div>
      </div>
    </b-row>
    <b-row>
      <div class="text-left powered-div mb-5">
        <span class="powered-font-color mr-2"> Powered by </span>
        <span class="cursor-pointer-text">
          <span><font-awesome-icon :icon="['fab', 'tripadvisor']"/></span>
          <span class="font-weight-bold">trip</span>
          <span class="advisor-font-color font-weight-bold">advisor</span>
        </span>
      </div>
      <div class="ml-auto allreview-font font-weight-bold ">
        <span class="mr-2 cursor-pointer-text">ALL REVIEWS</span>
        <span class="mr-2 slash-color">|</span>
        <span class="cursor-pointer-text"> WRITE YOUR OWN REVIEW</span>
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
          reviewname: "NT Global, BUSSINESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NT Global, BUSSINESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NT Global, BUSSINESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NT Global, BUSSINESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
          reviewhead: "Good Value and well located",
          reviewname: "NT Global, BUSSINESS Apr 03,2019",
          reviewpara:
            "Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.div-border-review {
  border: 1px solid #80808059;
  border-radius: 6px;
  padding: 19px;
  box-shadow: 1px 1px 1px 1px #8888882b;
}
.icon-color {
  color: $textgreencolor;
  font-size: 14px;
  vertical-align: middle;
}
.comment-lightgray-head {
  color: $alllightgraytext;
  font-size: 12px;
}
.para-font-size {
  font-size: 13px;
  font-size: 11px;
  color: $allgraytextcolor;
}
.allreview-font {
  font-size: 10px;
  color: $alltextbluecolor;
}
.advisor-font-color {
  color: $textgreencolor;
}
.powered-font-color {
  color: $allgraytextcolor;
}
.powered-div {
  font-size: 12px;
}
.icon-size {
  font-size: 10px;
}
.review-div1-numsize {
  font-size: 30px;
  color: white;
}
.review-col1-bg {
  background-color: $textgreencolor;
  padding: 4px 10px 0px 10px;
}
.review-col1-divborder {
  border: 1px solid $textgreencolor;
  border-radius: 4px;
}

.review-col2-numsize {
  font-size: 12px;
  color: $allgraytextcolor;
}
.review-col2-border {
  border-right: 1px solid #b6b3b32e;
  font-size: 11px;
}
.location-margin {
  font-size: 11px;
  color: #1ea270c4;
  text-align: center;
}
.review-div1-fontsize {
  font-size: 12px;
  color: white;
}
.icon-color-display {
  display: block;
  color: $allgraytextcolor;
}
.slash-color {
  color: $allgraytextcolor;
}
.text-hover-review:hover {
  text-decoration: none;
  color: $alltextbluecolor;
}
.review-dot-icon {
  font-size: 10px;
}
.cursor-pointer-text {
  cursor: pointer;
}

.review-col1-icon {
  display: inline-block;
}
// .review-hr-text {
//   display: inline-block;
//   width: 32%;
//   margin: 8px 10px;
//   vertical-align: middle;
//   position: absolute;
// }
.review-grade-db {
  display: block;
}
.review-col2-relative {
  position: relative;
}
.review-col2-div-bgwhite {
  background-color: white;
}
.review-hr-position {
  position: absolute;
  top: -8px;
  z-index: -1;
  width: 100%;
}
.grade-fontsize {
  font-size: 12px;
  color: $allgraytextcolor;
}
.review-numsize {
  font-size: 7px;
}
</style>
