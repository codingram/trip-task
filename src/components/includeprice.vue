<template>
  <div class="p-3 pl-3">
    <div class="text-style till-time-date ">
      <span class="tick-iconsize mr-2"
        ><font-awesome-icon :icon="['fas', 'check']"
      /></span>
      <span>Buy 1 Get 1 on F&B</span>
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.option-bg {
  background-color: $optionbgcolor;
}
.text-style {
  padding-top: 40px;
  font-size: 12px;
}
.include-row-style {
  border: 1px solid #dee2e6;
  padding: 0px;
  max-width: 60px;
}
.tick-iconsize {
  font-size: 10px;
}
</style>
