<template>
  <div class="p-3 pl-3 whole-div-font">
    <div>
      <div class="pr-3 font-weight-bold option-head-color">OPTION 1</div>
    </div>
    <div>
      <div></div>
      <div class="room-only-color pb-1 pt-3 pl-2">
        <span class="mr-2 non-icon-size"
          ><font-awesome-icon :icon="['fas', 'times-circle']"
        /></span>
        <span class="font-weight-bold">Room Only</span>
      </div>
    </div>
    <div>
      <div class="pb-1 pt-3 pl-2 pr-3">
        <div>
          <span class="room-only-color">
            <span class="mr-2 non-icon-size"
              ><font-awesome-icon :icon="['fas', 'ticket-alt']"
            /></span>

            <span class="font-weight-bold">Free Cancellation</span></span
          >
          <span class="till-time-date"> till 22-apr-2019 07:00 PM IST</span>
        </div>
      </div>
    </div>
    <div>
      <div class="read-more pl-2 ml-4">Read More</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";

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
}
.till-time-date {
  color: $allgraytextcolor;
}
</style>
