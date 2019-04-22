<template>
  <div class="p-3 pl-3  table-fontsize">
    <div class="d-flex">
      <div class="mr-2 font-weight-bold option-head-color">OPTION 1</div>
      <button class="recomm-button">RECOMMENDED</button>
    </div>

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
      <div class="read-more pl-4 mb-5">Read More</div>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/Sstyle/option.scss";
</style>
