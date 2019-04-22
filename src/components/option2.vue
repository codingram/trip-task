<template>
  <div class="p-3 table-fontsize">
    <div class="font-weight-bold option-head-color">OPTION 2</div>

    <div class="room-only-color mb-1 mt-3 ml-2">
      <span class="mr-2 non-icon-size">
        <font-awesome-icon :icon="['fas', 'times-circle']" />
      </span>
      <span class="font-weight-bold">Room Only</span>
    </div>

    <div class="mb-1 ml-2 mr-3 mt-2">
      <span class="room-only-color d-flex">
        <div class="mr-2 non-icon-size">
          <font-awesome-icon :icon="['fas', 'ticket-alt']" />
        </div>
        <div>
          <span class="font-weight-bold">Free Cancellation</span>
          <span class="till-time-date"> till 22-apr-2019 07:00 PM IST</span>
          <div class="lineheight mb-4">Read More</div>
        </div>
      </span>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";

.none-refund {
  color: $textredcolor;
}
.till-time-date {
  color: $allgraytextcolor;
}
.lineheight {
  color: #008cff;
  font-size: 11px;
  line-height: 1.7;
}
</style>
