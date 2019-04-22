<template>
  <b-breadcrumb :items="items" class="breadcrum-style p-0"></b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home"
        },
        {
          text: "Hotel in Dubai"
        },
        {
          text: "Ibis One Central Hotel",
          active: true
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/Sstyle/breadcum.scss";
</style>
