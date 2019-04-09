<template>
  <div>
    <b-navbar toggleable="lg" class="mx-5 px-5 py-0">
      <b-navbar-brand href="#">
        <img src="../assets/sitelogo.png" alt="img" height="42px" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">FLIGHTS</b-nav-item>
          <b-nav-item href="#">HOTELS</b-nav-item>
          <b-nav-item href="#">HOLIDAYS</b-nav-item>
          <b-nav-item href="#">VISA</b-nav-item>
          <b-nav-item href="#">HOMESTAYS</b-nav-item>
          <b-nav-item href="#">BUS</b-nav-item>
          <b-nav-item href="#">CABS</b-nav-item>
          <b-nav-item href="#">TRAINS</b-nav-item>
          <b-nav-item href="#">GIFT CARDS</b-nav-item>
          <b-nav-item href="#">MORE+</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="right-items">TRIPS</b-nav-item>
          <b-nav-item href="#" class="right-items">SUPPORT</b-nav-item>
          <b-nav-item href="#" class="right-items">LOGIN</b-nav-item>
          <b-nav-item href="#" class="right-items">SIGNUP</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped lang="scss">
@import "../assets/scss/_rvariables.scss";
.navbar-light .navbar-nav .nav-link {
  color: #717171;
  font-size: 11px;

  &:hover {
    background: $navhover;
    color: white;
  }
}
.navbar-nav {
  height: 40px;
  line-height: 40px;
}
.navbar-brand {
  padding-top: 10;
}

.navbar {
  margin-top: -6px;
}
</style>
