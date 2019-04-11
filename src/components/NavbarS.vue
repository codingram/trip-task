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
                <span style="display:block"> Flights </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'hotel']" />
                <span style="display:block"> Hotels </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'parachute-box']" />
                <span style="display:block"> Holidays </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'train']" />
                <span style="display:block"> Trains </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'bus']" />
                <span style="display:block"> Buses </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'taxi']" />
                <span style="display:block"> Cabs </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'passport']" />
                <span style="display:block"> Visa </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'home']" />
                <span style="display:block"> Homestays </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'gift']" />
                <span style="display:block"> Giftcards </span>
              </b-nav-item>
              <b-nav-item href="#" style="text-align:center">
                <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
                <span style="display:block"> More </span>
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
  background-image:$mybuttoncolor;
  border: none;
  height: 25px;
  width:25px;
  text-align: center;
  font-size:11px;
}
.login-font-size {
  font-size: 11px;
}
</style>
