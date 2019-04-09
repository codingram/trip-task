<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
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
