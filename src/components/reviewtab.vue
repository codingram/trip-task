<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <b-tabs>
          <b-tab title="TRIPADVISOR " class="headfont">
            <reviews></reviews>
          </b-tab>

          <b-tab title="MAKEMYTRIP ">
            <reviews></reviews>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import reviews from "@/components/reviews.vue";

export default {
  name: "NavBar",
  components: {
    reviews
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.font-size {
  border-bottom: 1px solid #8080805c;
  -webkit-box-shadow: 0px 9px 0px 1px #b1a8a812;
  box-shadow: 0px 9px 0px 1px #b1a8a812;
  margin-bottom: 30px;
  font-size: 13px;
  font-weight: bold;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  border-bottom: 2px solid #008cff;
  font-weight: bold;
}
.nav-link {
  color: $allgraytextcolor;

  padding-bottom: 5px;
  padding-left: 5px;
}

.nav-tabs .nav-link {
  border: none;
  border-top-left-radius: none;
  border-top-right-radius: none;
}
.nav-tabs {
  border-bottom: 1px solid #dee2e6;
  font-size: 13px;
}
.nav-link:hover,
.nav-link:focus {
  text-decoration: none;
  color: gray;
}
.tab-content > .active {
  display: block;
  outline: none;
}
</style>
