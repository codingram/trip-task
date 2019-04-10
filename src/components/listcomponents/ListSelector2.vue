<template>
  <div>
    <div class="ListSelectortitleText mt-4">Select Type</div>
    <b-row class="mx-2 mt-2 textarrange">
      <b-col class="widthadjust border px-2 py-2">
        <a href="#">
          <span class="textchanges">1★</span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#">
          <span class="textchanges">2★</span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#">
          <span class="textchanges">3★</span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#">
          <span class="textchanges">4★</span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#">
          <span class="textchanges">5★</span>
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
  height: 45px;
  box-shadow: 0px 3px #bebebe;
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
