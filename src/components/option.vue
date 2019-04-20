<template>
  <div class="p-3 pl-3  table-fontsize">
    <div class="d-flex">
      <div class="pr-2 font-weight-bold option-head-color">OPTION 1</div>
      <button class="recomm-button">RECOMMENDED</button>
    </div>

    <div class="room-only-color mb-1 mt-3 ml-2">
      <span class="mr-2 non-icon-size">
        <font-awesome-icon :icon="['fas', 'times-circle']" />
      </span>
      <span class="font-weight-bold "> Room Only</span>
    </div>

    <div class="mb-1 ml-2 none-refund">
      <span class="mr-2 non-icon-size">
        <font-awesome-icon :icon="['fab', 'creative-commons-nc']" />
      </span>
      <span class="font-weight-bold">Non-Refundable</span>
    </div>

    <div class="read-more pl-4 ml-2">Read More</div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.option-bg {
  background-color: $optionbgcolor;
}
.recomm-button {
  text-align: center;
  background: linear-gradient(96deg, #53b2fe, #065af3);
  color: #fff;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 10px;
  padding: 0px 10px;
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
.table-fontsize {
  font-size: 11px;
}
.non-icon-size {
  font-size: 16px;
}
.option-head-color {
  color: $alltextheadcolor;
}
</style>
