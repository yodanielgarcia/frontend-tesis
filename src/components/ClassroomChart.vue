<template>
  <div class="small">
    <h2>Personas Con covid</h2>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      axios
        .get(
          "https://io1cl6mxk1.execute-api.us-east-2.amazonaws.com/default/userWithCovid"
        )
        .then((response) => {
          let itemsTable = response.data.map(function (element) {
            let options = {
              Sintoma: element.SymptomCovid,
              Descripcion: element.description,
            };
            return options;
          });
          this.items = itemsTable;
        });
    },
  },
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>