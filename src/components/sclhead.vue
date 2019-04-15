<template>
  <div class=" ">
    <b-container fluid>
      <div class=" mb-4 srcol-head ">
        <b-col md="10">
          <div>
            <b-row>
              <div id="f" class="pb-3">
                <b-col
                  ><a href="#table" class="link-text-scroll text-center m-3"
                    >ROOMS</a
                  ></b-col
                >
              </div>
              <div id="f" class="pb-3">
                <b-col
                  ><a href="#" class="link-text-scroll text-center m-3 "
                    >FACILITIES</a
                  ></b-col
                >
              </div>
              <div id="f" class="pb-3">
                <b-col
                  ><a href="#" class="link-text-scroll text-center m-3"
                    >LOCATIONS</a
                  ></b-col
                >
              </div>
              <div id="f" class="pb-3">
                <b-col
                  ><a href="#" class="link-text-scroll text-center m-3"
                    >POLICIES</a
                  ></b-col
                >
              </div>
              <div id="f" class="pb-3">
                <b-col
                  ><a href="#review" class="link-text-scroll text-center m-3"
                    >RATINGS AND REVIEWS</a
                  ></b-col
                >
              </div>
            </b-row>
          </div>
        </b-col>
      </div>
    </b-container>

    <div id="table">
      <table1></table1>
    </div>
    <div id="facility">
      <facilities></facilities>
    </div>
    <div id="review">
      <reviewtab></reviewtab>
    </div>
  </div>
</template>
<script>
import facilities from "@/components/facilities.vue";
import table1 from "@/components/table.vue";
import reviewtab from "@/components/reviewtab.vue";
export default {
  name: "NavBar",
  components: {
    facilities,
    table1,
    reviewtab
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.srcol-head {
  border-bottom: 1px solid #8080805c;
  box-shadow: 0px 9px 0px 1px #b1a8a812;
  margin-bottom: 30px;
  padding-left: 78px;
  font-size: 13px;
  font-weight: bold;
}
.link-text-scroll {
  color: #443d3d;
  text-decoration: none;
}
// a:hover {
//   color: $alltextbluecolor;
//   text-decoration: none;
//   border-bottom: 2px solid $alltextbluecolor;
//   padding-bottom: 15px;
// }
.link-text-scroll:hover {
  color: $alltextbluecolor;
  text-decoration: none;
}
#f:hover {
  border-bottom: 3px solid $alltextbluecolor;
  color: $alltextbluecolor;
}
</style>
