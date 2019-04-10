<template>
  <div>
    <ListSelector1></ListSelector1>
    <ListSelector2></ListSelector2>
  </div>
</template>

<script>
import ListSelector1 from "@/components/listcomponents/ListSelector1.vue";
import ListSelector2 from "@/components/listcomponents/ListSelector2.vue";

export default {
  name: "NavBar",
  components: {
    ListSelector1,
    ListSelector2
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";
</style>
