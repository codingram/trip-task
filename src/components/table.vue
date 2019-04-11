<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ROOM TYPE</th>
                <th scope="col">OPTIONS</th>
                <th scope="col">INCLUDED IN THIS PRICE</th>
                <th scope="col">PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td><options></options></td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
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
export default {
  name: "NavBar",
  components: {
    options
  },
  data() {
    return {};
  }
};
</script>
