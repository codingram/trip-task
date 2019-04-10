<template>
  <div>
    <b-row class="m-0 mt-2">
      <div class="leftText">
        Filter Your Search
      </div>
      <div class="ml-auto rightText">
        <a href="#">Reset All</a>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "LeftsideTitle"
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";
.leftText {
  font-size: 12px;
  font-weight: bold;
}

.rightText {
  font-size: 10px;
}
</style>
