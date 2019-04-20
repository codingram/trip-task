<template>
  <div class="p-3 pl-3 table-fontsize">
    <div class="pr-3 font-weight-bold option-head-color">OPTION 2</div>

    <div class="room-only-color mb-1 mt-3 ml-2">
      <span class="mr-2 non-icon-size">
        <font-awesome-icon :icon="['fas', 'times-circle']" />
      </span>
      <span class="font-weight-bold">Room Only</span>
    </div>

    <div class="pb-1 pl-2 pr-3">
      <span class="room-only-color d-flex">
        <div class="mr-2 non-icon-size">
          <font-awesome-icon :icon="['fas', 'ticket-alt']" />
        </div>
        <div>
          <span class="font-weight-bold">Free Cancellation</span>
          <span class="till-time-date"> till 22-apr-2019 07:00 PM IST</span>
        </div>
      </span>
    </div>
    <div class="read-more pl-2 ml-4">Read More</div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";

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
