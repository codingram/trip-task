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
          <b-nav-item href="#" class="with-icon-link text-center">
            <span class="font-weight-normal">
              <font-awesome-icon
                :icon="['fas', 'suitcase-rolling']"
                class="tripicon"
              />
              <span class="d-block">
                TRIPS
              </span>
            </span>
          </b-nav-item>
          <b-nav-item href="#" class="right-items with-icon-link text-center">
            <span class="font-weight-normal"
              ><span class="border px-2 py-1 rounded">24X7</span>
              <span class="d-block">
                SUPPORT
              </span></span
            >
          </b-nav-item>
          <b-nav-item href="#" class="right-items">
            <span class="font-weight-normal"
              ><font-awesome-icon :icon="['fas', 'user']" class="tripicon" />
              LOGIN</span
            >
          </b-nav-item>
          <b-nav-item href="#" class="right-items"
            ><span class="font-weight-normal">SIGNUP</span></b-nav-item
          >
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
  font-size: 10px;
  font-weight: 900;
  // padding-bottom: 3px;
  padding: 6px;

  &:hover {
    background: $navhover;
    color: white;
  }
}
.right-items {
  font-weight: 100 !important;
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

.with-icon-link {
  line-height: 20px;
}

.tripicon {
  font-size: 15px;
}
</style>
