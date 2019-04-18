<template>
  <b-row>
    <div>
      <div class="price-title ">
        <span class="price-table-head">
          Deal Applied:<span class="font-weight-bold">INTL_CBCARDDTACC.</span>
          You Get Cashback of Rs. 285 to all credit and debit card within next
          72 hours, T&C apply
        </span>
      </div>
      <div class="option-div-display">
        <div>
          <div class="price-light-through pt-2 price-table-prices">₹3529</div>
          <div class="price-color font-weight-bold">₹ 3,177</div>
          <div class="price-table-prices">Per Night</div>
        </div>
        <div class="my-auto ml-3">
          <button class="booknow-box-button  button-style">
            SELECT ROOM
          </button>
        </div>
      </div>
    </div>
  </b-row>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.button-style {
  font-size: 11px;
}
.price-title {
  background-color: #d7fae2;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  margin: -13px -33px 15px;
}
.price-color {
  font-size: 17px;
  color: $alltextheadcolor;
}
.price-table-prices {
  color: $alllightgraytext;
}
.price-table-head
{
  color: $allgraytextcolor;
}
</style>
