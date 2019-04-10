<template>
  <b-container>
    <b-row>
      <b-col md="2" class="text-center zero-col-border ">
        <b-row class="zero-bg-color ">
          <div class="mx-auto">
            <b-row>
              <span class="mx-auto zero-font">4.0</span>
            </b-row>
            <b-row>
              <span>920 Reviews</span>
            </b-row>
          </div>
        </b-row>
        <b-row class=" mx-auto px-4 ">
          <font-awesome-icon :icon="['fab', 'tripadvisor']" />
          <div class="icon-color icon-size">
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['fas', 'dot-circle']" />
            <font-awesome-icon :icon="['far', 'dot-circle']" />
            <font-awesome-icon :icon="['far', 'circle']" />
          </div>
        </b-row>
      </b-col>
      <b-col md="3"></b-col>
      <b-col md="7"></b-col>
    </b-row>
    <b-row
      class="div-border mb-4"
      v-for="review in reviews"
      v-bind:key="review.index"
    >
      <b-col md="10">
        <b-row>
          <b-col md="12" class="mx-auto">
            <div class="mx-auto">
              <b-row>
                <b-col class="p-0">
                  <div class="icon-color font-weight-bold">
                    {{ review.reviewhead }}
                    <font-awesome-icon :icon="['fas', 'dot-circle']" />
                    <font-awesome-icon :icon="['fas', 'dot-circle']" />
                    <font-awesome-icon :icon="['fas', 'dot-circle']" />
                    <font-awesome-icon :icon="['far', 'dot-circle']" />
                    <font-awesome-icon :icon="['far', 'circle']" />
                  </div>

                  <div class="nt-text-color pb-2">
                    {{ review.reviewname }}
                  </div>
                  <div class="para-font-size">{{ review.reviewpara }}</div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <div class="text-left powered-div mb-5">
        <span class="powered-font-color"> Powered by </span>
        <font-awesome-icon :icon="['fab', 'tripadvisor']" />
        <span class="font-weight-bold">trip</span
        ><span class="advisor-font-color">advisor</span>
      </div>
      <div class="ml-auto para-font-size allreview-font font-weight-bold">
        ALL REVIEWS | WRITE YOUR OWN REVIEW
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
.div-border {
  border: 1px solid #80808059;
  border-radius: 6px;
  padding: 29px;
  box-shadow: 1px 1px 1px 1px #8888882b;
}
.icon-color {
  color: $textgreencolor;
}
.nt-text-color {
  color: gray;
  font-size: 14px;
}
.para-font-size {
  font-size: 13px;
}
.allreview-font {
  font-size: 12px;
  color: $alltextbluecolor;
}
.advisor-font-color {
  color: $textgreencolor;
}
.powered-font-color {
  color: gray;
}
.powered-div {
  font-size: 13px;
}
.icon-size {
  font-size: 14px;
}
.zero-font {
  font-size: 46px;
}
.zero-bg-color {
  background-color: $textgreencolor;
}
.zero-col-border{
border:1px solid $textgreencolor;
}
</style>
