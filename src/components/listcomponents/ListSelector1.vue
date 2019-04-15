<template>
  <div>
    <div class="ListSelectortitleText mt-3">Price</div>
    <b-row class="mx-2 mt-2 textarrange">
      <b-col cols="3" class="border px-1">
        <a href="#" class="textchangesanchor">
          <span class="textchanges">Under<br />₹ 2,000</span>
        </a>
      </b-col>
      <b-col cols="3" class="border px-1">
        <a href="#" class="textchangesanchor">
          <span class="textchanges">₹ 2,001<br />to<br />₹ 4,000</span>
        </a>
      </b-col>
      <b-col cols="3" class="border px-1">
        <a href="#" class="textchangesanchor">
          <span class="textchanges">₹ 4,001<br />to<br />₹ 6,000</span>
        </a>
      </b-col>
      <b-col cols="3" class="border px-1">
        <a href="#" class="textchangesanchor">
          <span class="textchanges">₹ 6,001 & Above</span>
        </a>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ListSelector"
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";
.textarrange {
  background-color: #ffffff;
  line-height: 1;
  text-align: center;
  height: 60px;
  box-shadow: 1px 4px #bebebe;
  .textchangesanchor {
    text-decoration: none;
    .textchanges {
      text-decoration: none;
    }
  }
}

.textchanges {
  color: $dimmerfont;
  font-size: 11px;
}

.ListSelectortitleText {
  color: $dimfont;
  font-size: 12px;
  font-weight: 700;
}
</style>
