<template>
  <b-row>
    <b-breadcrumb :items="items" class="breadcrum-style"></b-breadcrumb>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "#"
        },
        {
          text: "Hotel in Dubai",
          href: "#"
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
.breadcrum-style {
  background-color: white;
  padding-bottom: 0px;
  padding-top: 18px;
  padding-left: 0px;
}
</style>
