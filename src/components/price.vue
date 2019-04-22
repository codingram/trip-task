<template>
  <b-row>
    <div class="price-title ">
      <span class="price-table-head">
        Deal Applied:<span class="font-weight-bold">INTL_CBCARDDTACC.</span>
        You Get Cashback of Rs. 285 to all credit and debit card within next 72
        hours, T&C apply
      </span>
    </div>
    <div class="d-flex mt-4">
      <div class="text-lineheight">
        <div class="pt-2 price-table-prices table-price-strike ">₹3529</div>
        <div class="price-color font-weight-bold">₹ 3,177</div>
        <div class="price-table-prices">Per Night</div>
      </div>
      <div class="my-auto ml-3">
        <button class="booknow-box-button  button-style">
          SELECT ROOM
        </button>
      </div>
    </div>
  </b-row>
</template>
<style lang="scss">
@import "../assets/scss/_svariables.scss";
.button-style {
  font-size: 10px;
}
.price-title {
  background-color: #d7fae2;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 7px 16px;
  margin: -12px -33px 15px;
}
.price-color {
  font-size: 17px;
  color: $alltextheadcolor;
}
.price-table-prices {
  color: $alllightgraytext;
  font-size: 10px;
}
.price-table-head {
  color: $allgraytextcolor;
}
.table-price-strike {
  text-decoration: line-through;
}
.price-title::before {
  background-color: $tablepricebgcolor;
  position: relative;
  padding: 10px 16px;
  margin: -16px -20px 15px;
}
.price-table-head::after {
  top: 100%;
  left: 10%;
  border: solid transparent;
  content: " ";
  position: absolute;
  border-top-color: $tablepricebgcolor;
  border-width: 14px;
  margin-left: -15px;
}
.text-lineheight{
  line-height: 16px;
}
</style>
