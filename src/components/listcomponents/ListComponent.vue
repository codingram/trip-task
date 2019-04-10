<template>
  <div>
    <FilterList></FilterList>
  </div>
</template>

<script>
import FilterList from "@/components/listcomponents/FilterList.vue";
export default {
  name: "NavBar",
  components: {
    FilterList
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_rvariables.scss";
</style>
