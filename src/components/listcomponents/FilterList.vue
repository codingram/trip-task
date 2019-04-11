<template>
  <div class="mt-4">
    <div class="ListSelectortitleText mt-3 mb-2">{{ filtertoptitle }}</div>
    <div class="border listfilter px-2">
      <slot name="listLoopData"></slot>
      <!-- <div class="border-bottom">
        <div class="checkbox-heading">
          <a href="#">5 Star Hotels In Dubai</a>
          <span class="float-right">
            100
          </span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterList",
  props: {
    filtertoptitle: String
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";
.ListSelectortitleText {
  color: $dimfont;
  font-size: 12px;
  font-weight: 700;
}
.listfilter {
  background-color: #ffffff;
  font-size: 10px;
  color: $dimfont;
  padding: 0px;

  .list-heading {
    color: $dimfont;
    font-size: 11px;
    border-bottom: 0px solid $dimmerfont;
    padding: 10px 0;
    .list-edit {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
