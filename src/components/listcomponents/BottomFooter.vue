<template>
  <div class="footerbg">
    <b-container>
      <b-row class="py-2">
        <b-col md="2" class="footer-title">Product Offerings</b-col>
        <b-col md="2" class="footer-title">Hotels</b-col>
        <b-col md="2" class="footer-title">Top International Hotels</b-col>
        <b-col md="2" class="footer-title">International Hotel Cities</b-col>
        <b-col md="2" class="footer-title">International Hotels</b-col>
        <b-col md="2" class="footer-title">Follow Us</b-col>
      </b-row>
      <b-row class="py-2">
        <b-col md="2" class="footer-text">
          <ul class="p-0">
            <li><a href="#">Flights</a></li>
            <li><a href="#">Flight+Hotel Deals</a></li>
            <li><a href="#">International Flights</a></li>
            <li><a href="#">Hotels</a></li>
            <li><a href="#">International Hotels</a></li>
            <li><a href="#">Holidays in India</a></li>
            <li><a href="#">International Holidays</a></li>
            <li><a href="#">Bus</a></li>
            <li><a href="#">Rail</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">MICE</a></li>
            <li><a href="#">B2B</a></li>
          </ul>
        </b-col>
        <b-col md="2" class="footer-text">
          <ul class="p-0">
            <li><a href="#">Hotels in Jaipur</a></li>
            <li><a href="#">Hotels in Ooty</a></li>
            <li><a href="#">Hotels in Delhi</a></li>
            <li><a href="#">Hotels in Mumbai</a></li>
            <li><a href="#">Hotels in Chennai</a></li>
            <li><a href="#">Hotels in Kolkata</a></li>
            <li><a href="#">Hotels in Goa</a></li>
            <li><a href="#">Hotels in Bangalore</a></li>
            <li><a href="#">Hotels in Shimla</a></li>
            <li><a href="#">Hotels in Munnar</a></li>
            <li><a href="#">Hotels in Udaipur</a></li>
            <li><a href="#">Hotels in Pune</a></li>
          </ul>
        </b-col>
        <b-col md="2" class="footer-text">
          <ul class="p-0">
            <li><a href="#">Hotels in Maldives</a></li>
            <li><a href="#">Hotels in London</a></li>
            <li><a href="#">Hotels in Langkawi</a></li>
            <li><a href="#">Hotels in Thailand</a></li>
            <li><a href="#">Hotels in Malaysia</a></li>
            <li><a href="#">Hotels in Istanbul</a></li>
            <li><a href="#">Hotels in Rome</a></li>
            <li><a href="#">Hotels in SriLanka</a></li>
            <li><a href="#">Hotels in Switzerland</a></li>
            <li><a href="#">Hotels in LosAngeles</a></li>
            <li><a href="#">Hotels in KualaLumpur</a></li>
            <li><a href="#">Hotels in Tokyo</a></li>
          </ul>
        </b-col>
        <b-col md="2" class="footer-text"
          ><ul class="p-0">
            <li><a href="#">Hotels in Shanghai</a></li>
            <li><a href="#">Hotels in Venice</a></li>
            <li><a href="#">Hotels in Manila</a></li>
            <li><a href="#">Hotels in Australia</a></li>
            <li><a href="#">Hotels in Canada</a></li>
            <li><a href="#">Hotels in Melbourne</a></li>
            <li><a href="#">Hotels in Guangzhou</a></li>
            <li><a href="#">Hotels in Phi Phi Island</a></li>
            <li><a href="#">Hotels in Doha</a></li>
            <li><a href="#">Hotels in Dubai</a></li>
            <li><a href="#">Hotels in Krabi</a></li>
            <li><a href="#">Hotels in Amsterdam</a></li>
          </ul></b-col
        >
        <b-col md="2" class="footer-text"
          ><ul class="p-0">
            <li><a href="#">Hotels in Singapore</a></li>
            <li><a href="#">Hotels in Bangkok</a></li>
            <li><a href="#">Hotels in Pattaya</a></li>
            <li><a href="#">Hotels in Phuket</a></li>
            <li><a href="#">Hotels in Bali</a></li>
            <li><a href="#">Hotels in HongKong</a></li>
            <li><a href="#">Hotels in Paris</a></li>
            <li><a href="#">Hotels in Koh Samui</a></li>
            <li><a href="#">Hotels in NewYork</a></li>
            <li><a href="#">Hotels in Las Vegas</a></li>
            <li><a href="#">Hotels in Colombo</a></li>
            <li><a href="#">Hotels in Macau</a></li>
          </ul></b-col
        >
        <b-col md="2" class="footer-text">Follow Us</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "FilterList",
  props: {
    filtertoptitle: String
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/_rvariables.scss";
.footerbg {
  background-color: $footerbgcolor;
  .footer-title {
    color: #d3daff;
    font-size: 12px;
    font-weight: 700;
  }
  .footer-text {
    color: #d3daff;
    font-size: 12px;
    line-height: 19px;

    ul {
      list-style-type: none;
      li {
        a {
          color: #d3daff;
        }
      }
    }
  }
}
</style>
