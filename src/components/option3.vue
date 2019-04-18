<template>
  <div class="p-3 pl-3 whole-div-font">
    <div>
      <div class="pr-3 font-weight-bold option-head-color">OPTION 1</div>
    </div>
    <div>
      <div class="room-only-color pb-1 pt-3 pl-2">
        <span class="mr-2 non-icon-size">
          <font-awesome-icon :icon="['fas', 'times-circle']"
        /></span>
        <span class="font-weight-bold "> Room Only</span>
      </div>
    </div>
    <div>
      <div class="pb-1 pl-2 none-refund">
        <span class="mr-2 non-icon-size">
          <font-awesome-icon :icon="['fab', 'creative-commons-nc']"
        /></span>
        <span class="font-weight-bold">Non-Refundable</span>
      </div>
    </div>
    <div>
      <div class="read-more pl-4 ml-2">Read More</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.option-bg {
  background-color: $optionbgcolor;
}
.room-only-color {
  color: $textgreencolor;
}
.none-refund {
  color: $textredcolor;
}
.read-more {
  color: $alltextbluecolor;
  font-size: 13px;
  margin-top: -5px;
  margin-left: 3px;
}
.whole-div-font {
  font-size: 12px;
}
.non-icon-size {
  font-size: 16px;
}
</style>
