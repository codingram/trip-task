<template>
  <div>
    <b-navbar toggleable="lg" class="mx-5 px-5 py-0">
      <b-navbar-brand href="#">
        <img
          src="../assets/ImagesS/sitelogo.png"
          alt="sitelogo"
          height="42px"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <div>
        <b-col md="8" class="icon-text-font">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'plane']" />
                <span class="icon-display"> Flights </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'hotel']" />
                <span class="icon-display"> Hotels </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'parachute-box']" />
                <span class="icon-display"> Holidays </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'train']" />
                <span class="icon-display"> Trains </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'bus']" />
                <span class="icon-display"> Buses </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'taxi']" />
                <span class="icon-display"> Cabs </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'passport']" />
                <span class="icon-display"> Visa </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'home']" />
                <span class="icon-display"> Homestays </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'gift']" />
                <span class="icon-display"> Giftcards </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
                <span class="icon-display"> More </span>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </div>
      <div class="ml-auto">
        <b-col>
          <b-row>
            <button class="my-button">my</button>
            <b-col class="login-font-size">
              <span>Login or</span><br />
              <span> Create Account </span></b-col
            >
          </b-row>
        </b-col>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
ul > li {
  display: inline;
  list-style-type: none;
}
.content-inline {
  display: inline;
  list-style-type: none;
}
.icon-text-font {
  font-size: 14px;
  padding-right: 3px;
}
.my-button {
  border-radius: 365%;
  color: white;
  background-image: $mybuttoncolor;
  border: none;
  height: 25px;
  width: 25px;
  text-align: center;
  font-size: 11px;
}
.login-font-size {
  font-size: 11px;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: $alltextbluecolor;
  outline: none;
}
.icon-display {
  display: block;
}
</style>
