<template>
  <div>
    <b-navbar toggleable="lg" class="mx-5 px-5 py-0">
      <b-navbar-brand href="#" class="pl-4">
        <img src="../../assets/imagesR/sitelogo.png" alt="img" height="40px" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">FLIGHTS</b-nav-item>
          <b-nav-item href="#">HOTELS</b-nav-item>
          <b-nav-item href="#">HOLIDAYS</b-nav-item>
          <b-nav-item href="#">
            <span class="badge-span">
              <b-badge variant="danger" class="badge-position">NEW</b-badge>
              VISA
            </span>
          </b-nav-item>
          <b-nav-item href="#">
            <span class="badge-span">
              <b-badge variant="danger" class="badge-position">NEW</b-badge>
              HOMESTAYS
            </span>
          </b-nav-item>
          <b-nav-item href="#">BUS</b-nav-item>
          <b-nav-item href="#">CABS</b-nav-item>
          <b-nav-item href="#">TRAINS</b-nav-item>
          <b-nav-item href="#">GIFT CARDS</b-nav-item>
          <b-nav-item href="#">MORE+</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-5">
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
@import "../../assets/scss/_rvariables.scss";
.navbar-light .navbar-nav .nav-link {
  color: #717171;
  font-size: 11px;
  font-weight: 900;

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
  padding-top: 17px;
}

.navbar {
  margin-top: -11px;
}
.badge-span {
  position: relative;

  .badge-position {
    position: absolute;
    right: 0;
  }
}
</style>
