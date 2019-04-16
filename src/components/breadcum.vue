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
.breadcrum-style {
  background-color: white;
  font-size: 10px;
}
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: ">" !important;
}
</style>
