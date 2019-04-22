<template>
  <div class="p-3 pl-3 whole-div-font">
    <div class="font-weight-bold option-head-color">OPTION 3</div>
    <div class="room-only-color mb-1 mt-3 ml-2">
      <span class="mr-2 non-icon-size">
        <font-awesome-icon :icon="['fas', 'times-circle']" />
      </span>
      <span class="font-weight-bold "> Room Only</span>
    </div>
    <div class="mb-1 ml-2 mt-2 none-refund">
      <span class="mr-2 non-icon-size">
        <font-awesome-icon :icon="['fab', 'creative-commons-nc']" />
      </span>
      <span class="font-weight-bold">Non-Refundable</span>
      <div class="read-more ml-4 mb-5">Read More</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.none-refund {
  color: $textredcolor;
}
.read-more {
  color: $alltextbluecolor;
  font-size: 11px;
  line-height: 5px;
}
.whole-div-font {
  font-size: 12px;
}
.non-icon-size {
  font-size: 16px;
}
</style>
