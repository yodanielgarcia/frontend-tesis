<template>
  <div class="small">
    <h2>Interesados en volver a las aulas</h2>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "../charts/UserbackClassrooms";
const axios = require("axios");
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      userWantsBack: 10,
      userNoWantsBack: 5,
    };
  },
  mounted() {
    axios
      .get(
        "https://k3rz093pmf.execute-api.us-east-2.amazonaws.com/default/backToUniversity"
      )
      .then((response) => {
        let count = 0;
        let Users = response.data.map(function (element) {
          if (element.ReturnFaceToFace != 0) {
            count += 1;
          }
          return count;
        });
        this.userWantsBack = count;
        this.userNoWantsBack = Users.length - count;
        this.fillData();
      });
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Si quiere Regresar", "No quiere Regresar"],
        datasets: [
          {
            label: "Regreso a la presencialidad",
            backgroundColor: "#3d34eb",
            data: [this.userWantsBack, this.userNoWantsBack],
          },
        ],
      };
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

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
