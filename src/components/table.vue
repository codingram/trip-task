<template>
  <div class="table-outline">
    <b-container>
      <!-- <b-row>
        <b-col>
          <div class="breakfast-style px-5">
            <input type="checkbox" /><span class="text-secondary mt-5"
              >Breakfast Included</span
            >
          </div></b-col
        >
        <b-col><div>Free Cancellation</div></b-col>
      </b-row> -->

      <b-row>
        <b-col>
          <table class="table table-bordered mb-0">
            <thead>
              <tr class="row-gray-color">
                <th scope="col" class="roomtype-width">ROOM TYPE</th>
                <th scope="col">OPTIONS</th>
                <th scope="col" class="td-max-width">INCLUDED IN THIS PRICE</th>
                <th scope="col">PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" rowspan="4"><roomtype1></roomtype1></th>
                <td class="option-row-style p-0"><options></options></td>
                <td class="include-row-style  option-bg p-0">
                  <options3></options3>
                </td>
                <td class="option-bg price-td-width px-5"><price></price></td>
              </tr>
              <tr>
                <td class="option-row-style p-0"><options2></options2></td>
                <td class="include-row-style  p-0"><options3></options3></td>
                <td class=" price-td-width px-5"><price></price></td>
              </tr>
              <tr>
                <td class="option-row-style p-0"><options2></options2></td>
                <td class="option-row-style p-0"><options3></options3></td>
                <td class=" price-td-width px-5"><price></price></td>
              </tr>
              <tr>
                <td class="option-row-style p-0"><options2></options2></td>
                <td class="option-row-style p-0"><options3></options3></td>
                <td class=" price-td-width px-5"><price></price></td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th scope="row" rowspan="4" class="roomtype-width">
                  <roomtype2></roomtype2>
                </th>
              </tr>
              <tr>
                <td class="table2-option-row-style p-0">
                  <options2></options2>
                </td>
                <td class="include-row-style  p-0 td-max-width">
                  <options3></options3>
                </td>
                <td class=" price-td-width px-5"><price></price></td>
              </tr>
              <tr>
                <td class="option-row-style p-0"><options2></options2></td>
                <td class="include-row-style  p-0"><options3></options3></td>
                <td class=" price-td-width px-5"><price></price></td>
              </tr>
              <tr>
                <td class="option-row-style p-0"><options2></options2></td>
                <td class="option-row-style p-0"><options3></options3></td>
                <td class=" price-td-width px-5"><price></price></td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import options from "@/components/option.vue";
import options2 from "@/components/option2.vue";
import options3 from "@/components/includeprice.vue";
import price from "@/components/price.vue";
import roomtype1 from "@/components/roomtype.vue";
import roomtype2 from "@/components/roomtype2.vue";
export default {
  name: "NavBar",
  components: {
    options,
    options2,
    options3,
    price,
    roomtype1,
    roomtype2
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.row-gray-color {
  background-color: #8080801f;
  font-size: 13px;
  color: #2f2b2bb8;
}
.breakfast-style {
  max-width: 252px;
  border: 1px solid #cabfbf;
  height: 48px;
  box-shadow: 1px 1px 1px 1px slategrey;
}
.option-row-style {
  border: 1px solid #dee2e6;
  padding: 0px;
  max-width: 60px;
}
.td-max-width {
  max-width: 60px;
}
.price-td-width {
  max-width: 167px;
  font-size: 12px;
}
.roomtype-width {
  width: 108px;
}
.table-outline {
  outline: none;
}
.table2-option-row-style {
  border: 1px solid #dee2e6;
  padding: 0px;
  max-width: 84px;
}
</style>
