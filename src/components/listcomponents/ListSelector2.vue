<template>
  <div>
    <div class="ListSelectortitleText mt-4">Select Type</div>
    <b-row class="mx-2 mt-2 textarrange">
      <b-col class="widthadjust border px-2 py-2">
        <a href="#" class="textchangesanchor">
          <span class="textchanges"
            >1
            <span
              ><font-awesome-icon
                :icon="['fas', 'star']"
                class="staricon"/></span
          ></span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#" class="textchangesanchor">
          <span class="textchanges"
            >2
            <span
              ><font-awesome-icon
                :icon="['fas', 'star']"
                class="staricon"/></span
          ></span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#" class="textchangesanchor">
          <span class="textchanges"
            >3
            <span
              ><font-awesome-icon
                :icon="['fas', 'star']"
                class="staricon"/></span
          ></span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#" class="textchangesanchor">
          <span class="textchanges"
            >4
            <span
              ><font-awesome-icon
                :icon="['fas', 'star']"
                class="staricon"/></span
          ></span>
        </a>
      </b-col>
      <b-col class="widthadjust border px-2 py-2">
        <a href="#" class="textchangesanchor">
          <span class="textchanges"
            >5
            <span
              ><font-awesome-icon
                :icon="['fas', 'star']"
                class="staricon"/></span
          ></span>
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
  height: 40px;
  box-shadow: 0px 3px #bebebe;
}
.textchangesanchor {
  text-decoration: none;
  .textchanges {
    color: $dimmerfont;
    font-size: 11px;
  }
}
.staricon {
  font-size: 9px;
}
.ListSelectortitleText {
  color: $dimfont;
  font-size: 12px;
  font-weight: 700;
}
</style>
