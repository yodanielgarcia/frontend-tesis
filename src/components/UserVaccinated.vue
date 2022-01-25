<template>
  <div class="small">
    <h2>Personas Vacunadas</h2>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "../charts/ClassroomCapacity";
const axios = require("axios");
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      userVaccinated: 10,
      userNoVaccinated: 5,
    };
  },
  mounted() {
    axios
      .get(
        "https://2tgdxgn1rh.execute-api.us-east-2.amazonaws.com/default/UserVaccinated"
      )
      .then((response) => {
        let count = 0;
        let vaccinateUsers = response.data.map(function (element) {
          if (element.Vaccine != 0) {
            count += 1;
          }
          return count;
        });
        this.userVaccinated = count;
        this.userNoVaccinated = vaccinateUsers.length - count;
        this.fillData();
      });
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Vacunado SI", "Vacunado No"],
        datasets: [
          {
            label: "Vacunados",
            backgroundColor: "#f81010",
            data: [this.userVaccinated, this.userNoVaccinated],
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
