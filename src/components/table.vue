<template>
  <div class="table-outline">
    <b-container>
      <div class="break-cancel-display">
        <div>
          <div class="breakfast-style">
            <div
              class="text-center break-inc text-secondary custom-control custom-checkbox"
            >
              <input type="checkbox" />Breakfast Included
            </div>
          </div>
        </div>
        <div>
          <div class="breakfast-style ">
            <div class="text-center break-inc custom-control custom-checkbox">
              <input type="checkbox" />
              <span class="text-secondary">
                Free Cancellation
              </span>
            </div>
          </div>
        </div>
      </div>

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
                <td class="option-row-style option-bg p-0">
                  <options></options>
                </td>
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
                <td class="option-row-style p-0"><option4></option4></td>
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
                  <option4></option4>
                </td>
                <td class="include-row-style  p-0 td-max-width">
                  <options3></options3>
                </td>

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
import option4 from "@/components/option3.vue";
export default {
  name: "NavBar",
  components: {
    options,
    options2,
    options3,
    price,
    roomtype1,
    roomtype2,
    option4
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../assets/scss/Sstyle/table.scss";
</style>
