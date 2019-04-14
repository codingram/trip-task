  <template>
   <div class=" ">
    <b-container fluid >
      <div class=" mb-4 srcol-head active ">
        <b-col md="10">
          <div class="mb-3">
    <b-row>
      <div><b-col><a href="#table">ROOMS</a></b-col></div>
      <div><b-col><a href="#facility">FACILITIES</a></b-col></div>
      <div><b-col><a href="#">LOCATIONS</a></b-col></div>
      <div><b-col><a href="#">POLICIES</a></b-col></div>
      <div><b-col><a href="#review">RATINGS AND REVIEWS</a></b-col></div>
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
 .srcol-head
  {
    border-bottom: 1px solid #8080805c;
    box-shadow: 0px 9px 0px 1px #b1a8a812;
    margin-bottom: 30px;
    padding-left: 107px;
    font-size: 13px;
    font-weight: bold;
  }
   .div .active
  {
  color: $alltextbluecolor;
  border-bottom: 2px solid $alltextbluecolor;
  padding-bottom: 5px;
  font-weight: bold;
  font-weight: bold;
  }
</style>
