<template>
  <b-container>
    <div class="pt-4">
      <b-row>
        <b-col md="2" class="pl-0">
          <div class="text-center zero-col-border mb-4 pl-0 ">
            <div class="zero-bg-color m-0 ">
              <div class="mx-auto">
                <div>
                  <span class="mx-auto zero-font font-weight-bold">4.0</span>
                </div>
                <div>
                  <span class="review-font">920 Reviews</span>
                </div>
              </div>
            </div>
            <b-row class=" mx-auto p-2">
              <font-awesome-icon :icon="['fab', 'tripadvisor']" />
              <div class="icon-color icon-size">
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['far', 'circle']" />
              </div>
            </b-row>
          </div>
        </b-col>
        <b-col md="3">
          <div class="review-number-size grade-review">
            <div class="review-border ">
              <div>
                <span class="font-weight-bold">EXCELLENT</span
                >-----------------395 Reviews
              </div>
              <div>
                <span class="font-weight-bold">VERY GOOD</span
                >----------------300 Reviews
              </div>
              <div>
                <span class="font-weight-bold">AVERGAGE</span
                >-----------------395 Reviews
              </div>
              <div>
                <span class="font-weight-bold">POOR</span
                >-------------------------44 Reviews
              </div>
              <div>
                <span class="font-weight-bold">BAD</span
                >---------------------------51 Reviews
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="7">
          <div class="review-col-3">
            <div class="location-margin">
              <div class="my-auto ">
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />

                <font-awesome-icon :icon="['far', 'circle']" />
                <span class="icon-color-display"> LOCATION </span>
              </div>
            </div>
            <div class="location-margin">
              <div class="my-auto ">
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />

                <font-awesome-icon :icon="['far', 'circle']" />
                <span class="icon-color-display"> ROOM </span>
              </div>
            </div>
            <div class="location-margin">
              <div class="my-auto ">
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />

                <font-awesome-icon :icon="['far', 'circle']" />
                <span class="icon-color-display"> SERVICE </span>
              </div>
            </div>
            <div class="location-margin">
              <div class="my-auto ">
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />

                <font-awesome-icon :icon="['far', 'circle']" />
                <span class="icon-color-display"> CLEANLINESS </span>
              </div>
            </div>

            <div class="location-margin">
              <div class="my-auto ">
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />
                <font-awesome-icon :icon="['fas', 'dot-circle']" />

                <font-awesome-icon :icon="['far', 'circle']" />
                <span class="icon-color-display"> SLEEP</span>
              </div>
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
        <font-awesome-icon :icon="['fab', 'tripadvisor']" />
        <span class="font-weight-bold">trip</span>
        <span class="advisor-font-color font-weight-bold">advisor</span>
      </div>
      <div class="ml-auto allreview-font font-weight-bold ">
        <span class="mr-2 all-review">ALL REVIEWS</span>
        <span class="mr-2 slash-color">|</span>
        <span class="write-own-review"> WRITE YOUR OWN REVIEW</span>
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
.grade-review {
  margin-left: -87px;
  margin-top: 6px;
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
.zero-font {
  font-size: 30px;
  color: white;
}
.zero-bg-color {
  background-color: $textgreencolor;
}
.zero-col-border {
  border: 1px solid $textgreencolor;
  border-radius: 4px;
  width: 94px;
}

.review-number-size {
  font-size: 12px;
  color: $allgraytextcolor;
}
.review-border {
  border-right: 1px solid #b6b3b32e;
  margin-right: 103px;
}
.location-margin {
  margin-top: 33px;
  font-size: 11px;
  margin-right: 50px;
  color: #1ea270c4;
  margin-left: -51px;
  padding-right: 50px;
  text-align: center;
}
.review-font {
  font-size: 12px;
  color: white;
}
.icon-color-display {
  display: block;
  color: $allgraytextcolor;
}
.slash-color {
  color: black;
}
.text-hover-review:hover {
  text-decoration: none;
  color: $alltextbluecolor;
}
.review-col-3 {
  display: flex;
  margin-left: -55px;
}
.review-dot-icon {
  font-size: 10px;
}
.all-review {
  cursor: pointer;
}
.write-own-review {
  cursor: pointer;
}
</style>
