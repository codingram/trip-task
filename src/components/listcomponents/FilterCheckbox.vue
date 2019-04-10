<template>
  <div class="mt-4">
    <div class="border checkboxfilter px-2">
      <div class="border-bottom">
        <div class="checkbox-heading">
          Apart-Hotel
          <span class="float-right">
            <input class="checkbox-edit" type="checkbox" />
          </span>
        </div>
      </div>
      <div class="border-bottom">
        <div class="checkbox-heading">
          Apart-Hotel
          <span class="float-right">
            <input class="checkbox-edit" type="checkbox" />
          </span>
        </div>
      </div>
      <div class="border-bottom">
        <div class="checkbox-heading">
          Apart-Hotel
          <span class="float-right">
            <input class="checkbox-edit" type="checkbox" />
          </span>
        </div>
      </div>
      <div class="border-bottom">
        <div class="checkbox-heading">
          Apart-Hotel
          <span class="float-right">
            <input class="checkbox-edit" type="checkbox" />
          </span>
        </div>
      </div>
      <div class="border-bottom">
        <div class="checkbox-heading">
          Apart-Hotel
          <span class="float-right">
            <input class="checkbox-edit" type="checkbox" />
          </span>
        </div>
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

.checkboxfilter {
  background-color: #ffffff;
  font-size: 10px;
  color: $dimfont;
  height: 170px;
  padding: 0px;
  overflow-y: scroll;

  .checkbox-heading {
    color: $dimfont;
    font-size: 11px;
    border-bottom: 0px solid $dimmerfont;
    padding: 10px 0;
    .checkbox-edit {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
