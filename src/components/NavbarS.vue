<template>
  <div>
    <b-navbar>
      <b-navbar-nav>
        <div>
          <b-col md="2">
            <img
              src="../assets/ImagesS/sitelogo.png"
              alt="Sitelogo"
              width="150px"
            />
          </b-col>
        </div>

        <div class="mx-auto">
          <b-col md="8">
            <div>
              <ul>
                <li><font-awesome-icon :icon="['fas', 'plane']" />Flights</li>
                <li><font-awesome-icon :icon="['fas', 'hotel']" />Hotels</li>
                <li>
                  <font-awesome-icon :icon="['fas', 'parachute-box']" />Holidays
                </li>
                <li><font-awesome-icon :icon="['fas', 'plane']" />Trains</li>
                <li><font-awesome-icon :icon="['fas', 'plane']" />Buses</li>
                <li><font-awesome-icon :icon="['fas', 'plane']" />Cabs</li>
                <li><font-awesome-icon :icon="['fas', 'plane']" />Visa</li>
                <li><font-awesome-icon :icon="['fas', 'plane']" />Homestays</li>
                <li><font-awesome-icon :icon="['fas', 'plane']" />Giftcards</li>
                <li><font-awesome-icon :icon="['fas', 'plane']" />More</li>
              </ul>
            </div>
          </b-col>
        </div>
        <div>
          <b-col md="2">
            <b-nav-item> </b-nav-item>
          </b-col>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
ul > li {
  display: inline;
  list-style-type: none;
}
.content-inline {
  display: inline;
  list-style-type: none;
}
</style>
