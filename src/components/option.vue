<template>
  <div class="p-3 pl-4  whole-div-font">
    <b-row>
      <div class="pr-3 font-weight-bold">OPTION 1</div>
      <button class="recomm-button">RECOMMENDED</button>
    </b-row>
    <b-row>
      <div class="room-only-color pb-1 pt-3 pl-2">
        <span class="mr-2 non-icon-size">
          <font-awesome-icon :icon="['fas', 'times-circle']"
        /></span>
       <span class="font-weight-bold "> Room Only</span>
      </div>
    </b-row>
    <b-row>
      <div class="pb-1 pt-3 pl-2 none-refund">
         <span class="mr-2 non-icon-size">
          <font-awesome-icon :icon="['fab', 'creative-commons-nc']"
        /></span> <span class="font-weight-bold">Non-Refundable</span>
      </div>
    </b-row>
    <b-row>
      <div class="read-more pl-4 ml-2">Read More</div>
    </b-row>
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
  width: 102px;
  height: 24px;
  border: none;
  font-weight: bold;
  font-size: 10px;
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
.non-icon-size
{
      font-size: 16px;
}
</style>
