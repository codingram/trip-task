<template>
  <div>
    <div>
      <div class="ListSelectortitleText mt-3">Hotel Name</div>
      <div class="mt-2 inputTag">
        <input type="text" placeholder="Eg. Trident" class="filterinput" />
      </div>
    </div>
    <div>
      <div class="ListSelectortitleText mt-3">Hotel Location</div>
      <div class="mt-2 inputTag">
        <input type="text" placeholder="Eg. North Goa" class="filterinput" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListSelector"
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";

.filterinput {
  width: 100%;
  border: 1px solid #d2d2d2;
  border-radius: 3px;
  height: 28px;
  font-size: 11px;

  &::placeholder {
    color: $dimmerfont;
    padding: 0 15px;
  }
}

.ListSelectortitleText {
  color: $dimfont;
  font-size: 12px;
  font-weight: 700;
}
</style>
