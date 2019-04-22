<template>
  <div>
    <b-navbar toggleable="lg" class="mx-5 px-5 py-0">
      <b-navbar-brand href="">
        <img
          src="../assets/ImagesS/sitelogo.png"
          alt="sitelogo"
          height="42px"
        />
      </b-navbar-brand>
      <!-- icons with name -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <div>
        <b-col md="8">
          <div class="icon-text-font">
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="" class=" text-hover text-center mr-2">
                  <span class="icon-img-hover">
                    <font-awesome-icon :icon="['fas', 'plane']" />
                  </span>
                  <span class="icon-display"> Flights </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover active"
                    ><font-awesome-icon :icon="['fas', 'hotel']"
                  /></span>
                  <span class="icon-display"> Hotels </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover"
                    ><font-awesome-icon :icon="['fas', 'parachute-box']"
                  /></span>
                  <span class="icon-display"> Holidays </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover">
                    <font-awesome-icon :icon="['fas', 'train']"
                  /></span>
                  <span class="icon-display"> Trains </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover">
                    <font-awesome-icon :icon="['fas', 'bus']"
                  /></span>
                  <span class="icon-display"> Buses </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover">
                    <font-awesome-icon :icon="['fas', 'taxi']"
                  /></span>
                  <span class="icon-display"> Cabs </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover">
                    <font-awesome-icon :icon="['fas', 'passport']"
                  /></span>

                  <span class="icon-display"> Visa </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover"
                    ><font-awesome-icon :icon="['fas', 'home']"
                  /></span>
                  <span class="icon-display"> Homestays </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover">
                    <font-awesome-icon :icon="['fas', 'gift']"
                  /></span>
                  <span class="icon-display"> Giftcards </span>
                </b-nav-item>
                <b-nav-item href="" class=" text-center mr-2">
                  <span class="icon-img-hover"
                    ><font-awesome-icon :icon="['fas', 'ellipsis-h']"
                  /></span>
                  <span class="icon-display"> More </span>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-col>
      </div>
      <!-- login account -->
      <div class="ml-auto">
        <div class="login-icon active mr-2">my</div>
        <div class="login-font-size font-weight-bold">
          <a href="" class="login-font-size">
            Login or <br />
            Create Account
          </a>
        </div>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../assets/scss/Sstyle/navbar.scss";
</style>
